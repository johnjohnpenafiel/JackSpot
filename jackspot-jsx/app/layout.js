import { Figtree } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/sidebar";
import ModalProvider from "@/providers/ModalProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Jackspot App",
  description: "Share your favorite spots",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  );
}

export default RootLayout;