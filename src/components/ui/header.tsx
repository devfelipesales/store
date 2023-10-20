import React from "react";
import { Card } from "./card";
import { Button } from "./button";
import { Menu, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header>
      <Card className="flex items-center justify-between p-8">
        <Button size="icon" variant="outline">
          <Menu />
        </Button>
        <h1 className="text-lg font-semibold">
          <span className="text-primary">FSW</span> Store
        </h1>

        <Button size="icon" variant="outline">
          <ShoppingCart />
        </Button>
      </Card>
    </header>
  );
};

export default Header;
