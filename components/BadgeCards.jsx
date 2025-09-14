import React from "react";

export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 shadow-md bg-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
