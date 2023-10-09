import { usePolyfact } from "polyfact/hooks";
import type { Chat as ChatType } from "polyfact";
import { useState, useEffect } from "react";
import ChatUI from "@polyfact/chat";
import { Loader } from "../Loader";

const ChatWrapper = () => {
  const { auth: {login, status}, utils: {Chat} } = usePolyfact();
  const [chat, setChat] = useState<ChatType>();


  useEffect(() => {
    if (!chat) {
      setChat(new Chat({ autoMemory: true }));
    }
  }, [status]);

  if (login && status === "unauthenticated") {
    return (
      <button
        onClick={() => login({ provider: "github" })}
        className="login-btn"
      >
        Login with Github
      </button>
    );
  }

  if (status === "loading") {
    return <Loader />;
  }

  if (chat && status === "authenticated") {
    return (
      <ChatUI 
          chat={chat}
          chatBackgroundColor="rgba(111, 111, 111, 0.1)"
          chatTextColor="#2D3748"
          inputBackgroundColor="#E2E8F0"
          inputColor="#2D3748"
          placeholderTextColor="#A0AEC0"
          botMessageColor="#2D3748"
          botMessageBackgroundColor="rgba(220, 242, 247)"
          userMessageColor="#E2E8F0"
          userMessageBackgroundColor="#4A5568"
          botName="ChatBot"
          buttonBackgroundColor="#4A5568"
          buttonBorderColor="#2D3748"
          buttonBorderWidth="1px"
          dotsColor="#A0AEC0"
      />
  );
  
  }

  return null;
};

export default ChatWrapper;
