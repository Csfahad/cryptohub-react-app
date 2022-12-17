import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <HStack p={"4"} shadow={"md"} justifyContent={['center', 'space-evenly']} width={'full'}>
        
        <Button variant={'ghost'}>
          <Link to="/">Home</Link>
        </Button>
        <Button variant={"ghost"}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={'ghost'}>
          <Link to="/coins">Coins</Link>
        </Button>
      </HStack>
  );
};

export default Header;
