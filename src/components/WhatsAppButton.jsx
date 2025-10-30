import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "+918279317136";
  const message =
    "Hello! dunDrive,\ni want know more about your services.\nPlease call me back.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 right-5 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <img
        loading="lazy"
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-10 h-10"
      />
    </button>
  );
};

export default WhatsAppButton;
