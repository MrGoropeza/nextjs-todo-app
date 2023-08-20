"use client";
import noImage from "../../../../../../public/images/no-image-profile.png";

import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { useSession } from "@hooks/session.hook";
import pb from "@lib/consts/pocketbase.const";
import Image from "next/image";
import { useState } from "react";
import ProfileForm from "../ProfileForm/ProfileForm";

const NavBar = () => {
  const [profileDialogVisible, setProfileDialogVisible] = useState(false);

  const session = useSession();

  const handleLogout = () => pb.authStore.clear();

  return (
    <>
      <header className="flex h-16 items-center justify-between px-4">
        <h1 className="text-xl">Todo App</h1>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src={session?.avatar} width={32} height={32} />
                <AvatarFallback asChild>
                  <Image
                    src={noImage.src}
                    alt="user-image"
                    width={32}
                    height={32}
                  />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {session?.name}
                </p>
                <p className="text-muted-foreground text-xs leading-none">
                  {session?.email}
                </p>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={() => setProfileDialogVisible(true)}>
              Editar Perfil
            </DropdownMenuItem>

            <DropdownMenuItem onClick={handleLogout}>
              Cerrar Sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <ProfileForm
        visible={profileDialogVisible}
        onHide={() => setProfileDialogVisible(false)}
      />
    </>
  );
};

export default NavBar;
