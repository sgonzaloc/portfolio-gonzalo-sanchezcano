// src/components/icons/AWSIcon.tsx
import type { FC } from "react";

interface AWSIconProps {
  className?: string;
}

export const AWSIcon: FC<AWSIconProps> = ({
  className = "w-5 h-5 text-orange-600",
}) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M5.219 21.749L12 24l6.781-2.251L12 1.875 5.219 21.749zM12 3.75l5.625 16.5H12V3.75z" />
  </svg>
);
