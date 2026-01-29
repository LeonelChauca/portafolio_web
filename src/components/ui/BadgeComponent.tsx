import React from "react";

interface BadgeComponentProps {
  MainColor: keyof typeof colorClasses;
  children?: React.ReactNode;
}

const colorClasses = {
  blue: "bg-blue-600/30 border-blue-600 text-blue-600",
  red: "bg-red-500 border-red-500",
  green: "bg-green-500 border-green-500",
  yellow: "bg-yellow-500 border-yellow-500",
  purple: "bg-purple-500 border-purple-500",
};

const BadgeComponent = ({ MainColor, children }: BadgeComponentProps) => {
  return (
    <div
      className={` ${colorClasses[MainColor]} w-fit p-2 rounded-full border  text-sm`}
    >
      <span>{children}</span>
    </div>
  );
};

export default BadgeComponent;
