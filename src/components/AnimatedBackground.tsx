"use client";

import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute -right-40 -top-40 h-80 w-80 animate-pulse rounded-full bg-purple-600/20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-indigo-600/10 blur-3xl"></div>
    </div>
  );
};

export default AnimatedBackground;
