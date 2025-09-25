import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
export default function Button(
  { className = "", ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
) {
  return (
    <button
      {...props}
      className={
        "px-4 py-2 rounded-xl text-sm font-medium transition " +
        "bg-white/10 hover:bg-white/20 text-white border border-white/30 " +
        className
      }
    />
  );
}
