import React from "react";

interface TextLoaderProps {
  width: number;
  height: number;
}

function TextLoader({ width }: TextLoaderProps) {
  return <div className="animate-pulse bg-gray-200" style={{ width }}></div>;
}

export default TextLoader;
