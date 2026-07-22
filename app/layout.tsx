import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "SMB Fitting Industry - Custom CS / SS Elbows & Fittings",
  description: "Trusted manufacturer & supplier of custom-made seamless CS / SS elbows & fittings in Chennai for industrial applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Marketing Manager Tracking Code */}
        <Script
          id="marketing-manager-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function () { var e, t; e = document.createElement("script"), e.type = "text/javascript",
              e.async = !0, e.defer = !0, e.src =
              "https://mkmpages.smbfittingindustry.com/6666?isnew=1&pdn=mkmpages.smbfittingindustry.com&v=" + String((new Date).getMonth() + 1) + String((new Date).getFullYear()) +
              String(Math.round(parseInt((new Date).getDate() / 7), 0) + 1) +
              "&encsid=HjNWxahFnPo,&enccid=vNe5rwPd-dE,&wsid=Nzc1&dHJhY2tpbmdVcmw=2PtuCvDuCGT5LwTmxa5wjl35YCAFpwehX6VzxWewIgs,",
              t = document.getElementsByTagName("head")[0], t.appendChild(e, t) }();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {/* Marketing Manager Tracking Code - noscript fallback */}
        <noscript>
          <p>
            <img
              src="https://mkmpages.smbfittingindustry.com/7777?idsite=775"
              style={{ border: 0 }}
              alt=""
            />
          </p>
        </noscript>
        {children}
      </body>
    </html>
  );
}
