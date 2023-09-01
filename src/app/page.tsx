"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";
import ChatWrapper from "@/components/ChatWrapper";
import config from "@/config";

function App() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  return (
    <div
      className="app-container"
      style={{ backgroundColor: config.chat.botMessageBackgroundColor }}
    >
      <Header title={config.chat.botName} {...config.header} />
      <div className="content">{isBrowser ? <ChatWrapper /> : <Loader />}</div>
      <Footer name={config.chat.botName} {...config.footer} />
    </div>
  );
}

export default App;
