// src/components/ui/icons/CheckIcon.tsx
import type { FC } from "react";

interface CheckIconProps {
  className?: string;
}

export const CheckIcon: FC<CheckIconProps> = ({
  className = "w-5 h-5 text-green-500",
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);
