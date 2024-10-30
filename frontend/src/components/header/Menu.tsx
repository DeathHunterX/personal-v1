"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { BsArrowReturnLeft } from "react-icons/bs";

import { MENU_OPTIONS, SITE_ROUTES, SITE_STRINGS } from "@/constants/index";
import { initial, animate, exit, transition } from "@/lib/utils";
import { useScrollTo } from "@/hooks/useScrollTo";

export function Menu({ onClick = () => {} }) {
  const pathname = usePathname();
  const { scrollToEl } = useScrollTo();

  const sortAscending = (a: any, b: any) => a.id - b.id;

  const handleOnClick = (e: any) => {
    scrollToEl(e);
    window.setTimeout(() => onClick(), 350);
  };

  return (
    <LazyMotion features={domAnimation}>
      {MENU_OPTIONS.length !== 0 && pathname === SITE_ROUTES.projects ? (
        <m.div
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
        >
          <Link
            href={SITE_ROUTES.home}
            title={SITE_STRINGS.backToMainPageTitle}
            className="icon-link-btn"
          >
            <span>
              <BsArrowReturnLeft />
            </span>
            {SITE_STRINGS.backToMainText}
          </Link>
        </m.div>
      ) : (
        <m.nav
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
          role="menu"
        >
          <ul className="flex flex-col items-start justify-center gap-5 md:flex-row md:items-center">
            {MENU_OPTIONS.sort(sortAscending).map((menuItem) => (
              <li key={menuItem.id}>
                <a
                  href={menuItem.url}
                  title={menuItem.name}
                  onClick={handleOnClick}
                  className="relative text-xl after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-0 after:bg-current after:duration-300 after:ease-in-out hover:no-underline hover:after:w-full"
                >
                  {menuItem.name}
                </a>
              </li>
            ))}
          </ul>
        </m.nav>
      )}
    </LazyMotion>
  );
}
