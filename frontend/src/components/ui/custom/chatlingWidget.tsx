"use client"; // Mark this as a client component

import { useEffect } from "react";

const ChatlingWidget = () => {
  useEffect(() => {
    // Add the Chatling config
    window.chtlConfig = { chatbotId: "9197784116" };

    // Load the Chatling script dynamically
    const script = document.createElement("script");
    script.src = "https://chatling.ai/js/embed.js";
    script.async = true;
    script.dataset.id = "9197784116";
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No need to render anything
};

export default ChatlingWidget;