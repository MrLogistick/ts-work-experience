import type { ReactNode } from "react";

export const Title = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={`text-4xl font-bold text-center ${className}`}>
      {children}
    </h1>
  );
};
