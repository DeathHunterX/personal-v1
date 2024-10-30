const author = "Loi Phan Thanh";
const description =
  "Software developer from Moldova, Republic of, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React and Next.js";
const url = "https://vasile-novatchii.netlify.app";

export const AppMetadata = {
  metadataBase: new URL("http://localhost:3000"), // Corrected URL format
  title: {
    default: `Portfolio | ${author}`,
    template: `%s | ${author}`,
  },
  description,
  icons: {
    icon: "/assets/images/favicon.ico",
  },
  keywords: [
    "Loi Phan Thanh",
    "Loi Phan Thanh - software developer",
    "Frontend developer",
    "ReactJS developer",
    "Portfolio website",
    "Frontend Developer Portfolio",
  ],
  creator: author,
  authors: [{ name: author, url }],
  openGraph: {
    title: `${author} | Portfolio`,
    description,
    url,
    siteName: `${author} | Portfolio`,
    images: [
      {
        url: "https://vasile-novatchii.netlify.app/screenshot.webp",
        width: 800,
        height: 600,
        alt: "My personal portfolio website",
      },
      {
        url: "https://vasile-novatchii.netlify.app/screenshot.webp",
        width: 1800,
        height: 1600,
        alt: "My personal portfolio website",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};
