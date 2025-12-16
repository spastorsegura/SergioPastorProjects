import { Urbanist } from "next/font/google";
import "./globals.css";
// components
import MainNav from "@/components/MainNav";
import PageTransition from "@/components/PageTransition";
import RectangleTransition from "@/components/RectangleTransition";
import Gradient from "@/components/Gradient";
import Header from "@/components/Header";
import WhatsappFloatingButton from "@/components/WhatsappFloatingButton";

import { CartProvider } from "@/context/CartContext";
import { Toaster } from "@/components/ui/sonner";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sergio Pastor - Desarrollo & Diseño",
  description: "Sergio Pastor - Desarrollo & Diseño",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${urbanist.variable} antialiased overflow-hidden relative`}
      >
        <Toaster
          position="bottom-right"
          duration={3000}
          toastOptions={{
            classNames: {
              toast: "animate-in slide-in-from-bottom-4 fade-in rounded-xl!",
              description: "font-bold! text-secondary!",
            },
          }}
        />
        <CartProvider>
          <WhatsappFloatingButton />
          <Gradient />
          <RectangleTransition />
          <PageTransition />
          <div className="flex">
            {/* main nav */}
            <div className="hidden xl:flex w-[285px] h-screen bg-primary">
              <MainNav />
            </div>
            <div className="w-full max-w-[1130px] px-[15px] mx-auto">
              <Header />
              <div className="">{children}</div>
            </div>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
