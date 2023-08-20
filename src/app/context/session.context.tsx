"use client";

import pb from "@lib/consts/pocketbase.const";
import { PocketBaseRealtimeAction } from "@lib/enums/pocketbase-realtime.enum";
import { Admin, Record } from "pocketbase";
import { ReactNode, createContext, useEffect, useState } from "react";

export const SessionContext = createContext<Record | Admin | null>(null);

type Props = {
  children?: ReactNode;
};

const SessionContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<Record | Admin | null>(null);

  useEffect(() => {
    if (user?.id) {
      pb.collection("users").subscribe(user.id, (e) => {
        // console.log("realtime user:", e);
        if (e.action === PocketBaseRealtimeAction.Update)
          pb.authStore.save(pb.authStore.token, e.record);
      });
    }
  }, [user]);

  useEffect(() => {
    return () => {
      pb.realtime.unsubscribe();
    };
  }, []);

  useEffect(() => {
    pb.collection("users")
      .authRefresh({}, { $autoCancel: false })
      .catch(() => pb.authStore.clear());

    const removeAuthSub = pb.authStore.onChange((_, record) => {
      if (!record) return;

      record.avatar = record.avatar
        ? pb.files.getUrl(record as Record, record.avatar)
        : "";

      setUser(record);
    }, true);

    return removeAuthSub;
  }, []);

  return (
    <SessionContext.Provider value={user}>{children}</SessionContext.Provider>
  );
};

export default SessionContextProvider;
