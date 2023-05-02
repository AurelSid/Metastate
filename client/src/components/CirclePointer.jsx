import React, { useEffect, useState } from "react";

export const CirclePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Add mousemove event listener to document
    document.addEventListener("mousemove", handleMouseMove);

    // Remove event listener on unmount
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="cursor-circle"
      style={{ left: position.x, top: position.y }}
    />
  );
};

export default CirclePointer;
