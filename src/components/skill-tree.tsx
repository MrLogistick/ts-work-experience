import type * as React from "react";

export const SkillTree = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`h-full min-h-0 grow flex flex-col ${className ?? ""}`}>
      {children}
    </div>
  );
};

export const SkillTreeContent = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}) => {
  return (
    <div
      {...props}
      className={`min-h-0 grow overflow-y-auto flex flex-row justify-evenly border p-3 ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

export const SkillPath = ({
  children,
  className,
  pathName,
  columns,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  pathName: string;
  columns?: number;
  props?: React.HTMLAttributes<HTMLDivElement>;
}) => {
  return (
    <div {...props} className={`h-full border ${className} w-52`}>
      <h2>{pathName}</h2>
      <div
        className={`grid grid-cols-${columns || 1} justify-items-center items-center min-w-0 grow`}
      >
        {children}
      </div>
    </div>
  );
};

export const SkillNode = ({
  icon,
  name,
  active,
  className,
  ...props
}: {
  icon: React.ReactNode;
  name: string;
  active?: boolean;
  className?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}) => {
  return (
    <div
      {...props}
      className={`flex rounded-full p-3 h-20 w-20 items-center justify-center flex-col ${active ? "bg-green-500" : "bg-gray-500"} ${className}`}
    >
      {icon}
      <span>{name}</span>
    </div>
  );
};

export const SkillDescription = ({
  title,
  description,
  className,
  showDescription,
  ...props
}: {
  title: string;
  description: string;
  className?: string;
  showDescription?: boolean;
  props?: React.HTMLAttributes<HTMLDivElement>;
}) => {
  return (
    <div {...props} className={`border p-3 ${className} h-40 w-1/3 mx-auto`}>
      <h3>{title}</h3>
      {showDescription && <p>{description}</p>}
    </div>
  );
};
