import "@/src/global/styles/_reset.scss";
import "@/src/global/styles/global.scss";

import localFont from "next/font/local";

// Импортируем шрифт
const misto = localFont({
  src: [
    {
      path: "../global/fonts/Misto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../global/fonts/Misto-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-misto",
  display: "swap",
  preload: true,
});
const raleway = localFont({
  src: [
    {
      path: "../global/fonts/Raleway-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../global/fonts/Raleway-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../global/fonts/Raleway-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../global/fonts/Raleway-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../global/fonts/Raleway-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-raleway",
  display: "swap",
  preload: true,
});

export default function App({ Component, pageProps }) {
  return (
    <div
      className={`
        ${misto.variable} 
        ${raleway.variable}
      `}
    >
      <Component {...pageProps} />
    </div>
  );
}
