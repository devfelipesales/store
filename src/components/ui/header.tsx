"use client";

import React from "react";
import { Card } from "./card";
import { Button } from "./button";
import {
  MenuIcon,
  ShoppingCartIcon,
  LogInIcon,
  PercentIcon,
  ListOrderedIcon,
  HomeIcon,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Link from "next/link";
import Cart from "./cart";

const Header = () => {
  const { status, data } = useSession();

  const handleLogin = async () => {
    await signIn();
  };

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <header>
      <Card className="flex items-center justify-between rounded-none border-x-0 border-t-0 p-8">
        <Sheet>
          {/* asChild o primeiro filho de SheetTrigger é o que vai abrir o menu. Nesse caso, o button */}
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="text-left text-lg font-semibold">
              Menu Aberto
            </SheetHeader>

            {status === "authenticated" && data?.user && (
              <div className="flex items-center gap-2 py-4">
                <Avatar>
                  {/* É o que vai aparecer antes da foto do usuário ser carregada */}
                  <AvatarFallback>
                    {data?.user?.name?.[0].toUpperCase()}
                  </AvatarFallback>
                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>

                <p className="font-medium">{data.user.name}</p>
              </div>
            )}

            <Separator />

            <div className="mt-2 flex flex-col gap-3">
              {status === "unauthenticated" && (
                <Button
                  onClick={handleLogin}
                  variant="outline"
                  className="w-full justify-start gap-x-2"
                >
                  <LogInIcon size={16} />
                  Fazer Login
                </Button>
              )}
              {status === "authenticated" && (
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="w-full justify-start gap-x-2"
                >
                  <LogInIcon size={16} />
                  Fazer Logout
                </Button>
              )}
              <SheetClose asChild>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-x-2"
                  >
                    <HomeIcon size={16} />
                    Início
                  </Button>
                </Link>
              </SheetClose>
              <Button
                variant="outline"
                className="w-full justify-start gap-x-2"
              >
                <PercentIcon size={16} />
                Ofertas
              </Button>
              {/* Indica que o primeiro filho irá fechar o menu lateral(sheet) */}
              <SheetClose asChild>
                <Link href="/catalog">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-x-2"
                  >
                    <ListOrderedIcon size={16} />
                    Catálogo
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/">
          <h1 className="text-lg font-semibold">
            <span className="text-primary">FSW</span> Store
          </h1>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <ShoppingCartIcon />
            </Button>
          </SheetTrigger>

          <SheetContent className="w-[350px]">
            <Cart />
          </SheetContent>
        </Sheet>

        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
        </Button>
      </Card>
    </header>
  );
};

export default Header;
