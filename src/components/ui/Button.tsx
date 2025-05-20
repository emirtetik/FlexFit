import type { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "ghost";
  fullWidth?: boolean;
  textAlign?: "left" | "center" | "right";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  textAlign = "center",
  className = "",
  ...props
}: ButtonProps) {
  const buttonClass = classNames(
    "px-4 py-2 rounded-xl font-mont text-xs md:text-base transition-all duration-150 flex items-center gap-2 cursor-pointer",
    {
      // "bg-secondary text-black hover:opacity-90": variant === "primary",
      "bg-transparent text-white hover:text-secondary md:text-base text-xs": variant === "ghost",
      "w-full": fullWidth,
      "justify-start": textAlign === "left",
      "justify-center": textAlign === "center",
      "justify-end": textAlign === "right"
    },
    className
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}
