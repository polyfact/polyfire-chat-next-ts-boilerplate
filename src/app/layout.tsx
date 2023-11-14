"use client";

import { PolyfireProvider } from "polyfire-js/hooks";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import "./globals.css";

const BOT_NAME = process.env.NEXT_PUBLIC_CHATBOT_NAME || "Chatbot";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body className="app-container">
        <PolyfireProvider
          // Need to add the project alias in the .env file
          project={process.env.NEXT_PUBLIC_POLYFIRE_PROJECT || ""}
        >
          <Header
            title={BOT_NAME}
            logo="./logo.svg" // to replace with your own logo replace the logo.svg file in the public folder
            bgColor="#2D3748"
            textColor="#E2E8F0"
          />
          <div className="content">{children}</div>
          <Footer name={BOT_NAME} bgColor="#2D3748" textColor="#E2E8F0" />
        </PolyfireProvider>
      </body>
    </html>
  );
}
