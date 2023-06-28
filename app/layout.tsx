import "./globals.css";
import { Inter } from "next/font/google";
import NextAuthSessionProvider from "./provider/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hygeia",
  description: "Hospital outpatient system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  );
}
