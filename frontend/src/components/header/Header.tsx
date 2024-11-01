"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import SocialMedia from "../SocialMedia";
import Logo from "./Logo";
import { Menu } from "./Menu";
import { MobileMenu } from "./MobileMenu";
import Theme from "./Theme";

const Header = () => {
  const isMobile = useMediaQuery();

  return (
    <header className="sticky top-0 z-10 bg-inherit py-5 shadow-sm">
      <div className="container-md">
        <div className="flex items-center justify-between gap-3">
          <Logo />
          {isMobile ? <MobileMenu /> : <Menu />}
          <div className="flex items-center gap-5">
            {!isMobile && <SocialMedia />}
            <Theme />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
