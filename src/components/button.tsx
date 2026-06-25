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
      className={`border-2 h-20 w-20 rounded-lg items-center justify-center flex hover:cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const TitleButton = ({
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
      className={`h-12 w-48 text-2xl font-bold bg-[#964B00] rounded-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
