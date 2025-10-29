import React from "react";

const LoadingPage = () => {
  return (
    <>
      <style>
        {`
          @keyframes blink {
            0%, 20% { opacity: 0 }
            50% { opacity: 1 }
            100% { opacity: 0 }
          }
        `}
      </style>
      <div className="relative z-50 min-h-screen  flex flex-col items-center justify-center bg-gray-900 text-white ">
        <div className="flex space-x-2">
          <h1 className="text-4xl">
            Welcome to Dun <span className="text-green-400">Drive</span>
          </h1>
        </div>
        <p className="mt-6 text-lg font-medium tracking-wide select-none flex items-center">
          Loading
          <span className="ml-1">
            <span
              style={{ animation: "blink 1.5s infinite", animationDelay: "0s" }}
            >
              .
            </span>
            <span
              style={{
                animation: "blink 1.5s infinite",
                animationDelay: "0.3s",
              }}
            >
              .
            </span>
            <span
              style={{
                animation: "blink 1.5s infinite",
                animationDelay: "0.6s",
              }}
            >
              .
            </span>
          </span>
        </p>
      </div>
    </>
  );
};

export default LoadingPage;
