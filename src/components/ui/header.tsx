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
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
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
            <div className="mt-2 flex flex-col gap-3">
              <Button
                variant="outline"
                className="w-full justify-start gap-x-2"
              >
                <LogInIcon size={16} />
                Fazer Login
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-x-2"
              >
                <HomeIcon size={16} />
                Início
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-x-2"
              >
                <PercentIcon size={16} />
                Ofertas
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-x-2"
              >
                <ListOrderedIcon size={16} />
                Catálogo
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        <h1 className="text-lg font-semibold">
          <span className="text-primary">FSW</span> Store
        </h1>

        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
        </Button>
      </Card>
    </header>
  );
};

export default Header;
