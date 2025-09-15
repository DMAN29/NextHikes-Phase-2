import { Work_Sans, ZCOOL_XiaoWei } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
const ClientWrapper = dynamic(() => import("./ClientWrapper"));

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "700"],
});

export const zcoolXiaoWei = ZCOOL_XiaoWei({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zcool-xiaowei",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${zcoolXiaoWei.variable} antialiased bg-white`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
