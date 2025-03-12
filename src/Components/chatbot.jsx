import React from "react";

const ChatbotButton = () => {
  const openChatbot = () => {
    window.open(
      "https://www.myaibot.in/chatbot/embed/chatbot_code=913a439ed9964a3/welcome",
      "_blank"
    );
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      <button
        onClick={openChatbot}
        style={{
          padding: "12px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "50px",
          cursor: "pointer",
          fontSize: "16px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}
      >
        💬 Chat with Us
      </button>
    </div>
  );
};

export default ChatbotButton;
