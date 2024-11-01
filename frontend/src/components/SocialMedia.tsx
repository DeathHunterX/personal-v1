"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "@/lib/utils";
import { SOCIAL_MEDIA } from "@/constants/index";

const SocialMedia = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        role="menu"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
      >
        <ul className="flex items-center gap-5">
          {SOCIAL_MEDIA.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <a
                  href={item.url}
                  target="_blank"
                  aria-label={item.title}
                  title={item.title}
                  className="text-2xl"
                >
                  <Icon />
                </a>
              </li>
            );
          })}
        </ul>
      </m.nav>
    </LazyMotion>
  );
};

export default SocialMedia;
