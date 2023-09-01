import { usePolyfact, type Chat } from "polyfact";
import { useState, useEffect } from "react";
import ChatUI from "@polyfact/chat";
import config from "@/config";

const ChatWrapper = () => {
  const { polyfact, login, loading } = usePolyfact({
    project: "7b29de50-8ce4-4449-8382-115eee716f76",
  });
  const [chat, setChat] = useState<Chat>();

  useEffect(() => {
    if (polyfact) {
      setChat(
        new polyfact.Chat({
          systemPromptId:
            config.chat.promptId || "feea76f3-af40-4df9-be47-ad073d504615",
          autoMemory: true,
        })
      );
    }
  }, [polyfact]);

  if (login) {
    return (
      <button
        onClick={() => login({ provider: "github" })}
        className="login-btn"
      >
        Login with Github
      </button>
    );
  }

  if (chat) {
    return <ChatUI chat={chat} {...config.chat} />;
  }

  return null;
};

export default ChatWrapper;
