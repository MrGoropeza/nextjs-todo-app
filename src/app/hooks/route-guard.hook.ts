import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { useRouter } from "next/navigation";
import { Admin, Record, RecordAuthResponse } from "pocketbase";
import { useEffect } from "react";
import pb from "../lib/consts/pocketbase.const";

export const useRouteGuard = (
  onAuth: (args: {
    auth: RecordAuthResponse<Record | Admin>;
    router: AppRouterInstance;
  }) => void,
  onUnAuth: (args: { router: AppRouterInstance }) => void
) => {
  const router = useRouter();

  useEffect(() => {
    const unSubscribe = pb.authStore.onChange((token, record) => {
      if (!record) {
        onUnAuth({ router });
        return;
      }

      const auth: RecordAuthResponse<Record | Admin> = { token, record };

      onAuth({ auth, router });
    }, true);

    return unSubscribe;
  }, []);
};
