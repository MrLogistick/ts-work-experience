import type * as React from "react";

export const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      type="button"
      className={`border-2 h-20 w-20 items-center justify-center flex hover:cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
