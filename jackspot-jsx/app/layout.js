import { Figtree } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/sidebar";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Jackspot App",
  description: "Share your favorite spots",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  );
}

export default RootLayout;