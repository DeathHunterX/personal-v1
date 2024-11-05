const author = "Loi Phan Thanh";
const description = "";
const url = "https://loiphan-nextjs-portfolio.netlify.app";

export const AppMetadata = {
  metadataBase: new URL(url), // Corrected URL format
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
    "Frontend developer",
    "Data Engineer",
    "ReactJS developer",
    "Portfolio website",
    "Frontend Developer Portfolio",
  ],
  creator: author,
  authors: [{ name: author, description, url }],
  openGraph: {
    title: `${author} | Portfolio`,
    description,
    url,
    siteName: `${author} | Portfolio`,
    images: [
      {
        url: "https://loiphan-nextjs-portfolio.netlify.app/screenshot.png",
        width: 800,
        height: 600,
        alt: "My personal portfolio website",
      },
      {
        url: "https://loiphan-nextjs-portfolio.netlify.app/screenshot.png",
        width: 1800,
        height: 1600,
        alt: "My personal portfolio website",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};
