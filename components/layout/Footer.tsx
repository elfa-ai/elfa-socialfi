import React from "react";
import { Button } from "../ui/button";
import { getYear } from "date-fns";
import { cn } from "@/handlers/types/ui/common";
import FullWidthContainer from "../ui/atomic/layout/FullWidthContainer";
import SocialMedia from "./skeleton/SocialMedia";

const currentYear = getYear(new Date());

type FooterProps = {
  extraClassName?: string;
};

const Footer = ({ extraClassName = "" }: FooterProps) => {
  return (
    <footer className={cn("w-full fixed bottom-0 pt-4 pb-2", extraClassName)}>
      <FullWidthContainer>
        <div className="flex items-center justify-between">
          <SocialMedia />
        </div>

        <div className="border-t border-gray-300 my-2" />

        <div className="hidden md:flex items-center justify-between text-gray-700 ">
          <span>Elfa {currentYear}</span>
          <div className="flex gap-5 text-sm">
            <Button variant="link" size="link">
              Terms of Use
            </Button>
            <Button variant="link" size="link">
              Privacy Policy
            </Button>
          </div>
        </div>
      </FullWidthContainer>
    </footer>
  );
};

export default Footer;
