// src/components/icons/EducationIcon.tsx
import type { FC } from "react";

interface EducationIconProps {
  className?: string;
}

export const EducationIcon: FC<EducationIconProps> = ({
  className = "w-6 h-6 text-blue-600",
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14v6l9-5-9-5-9 5 9 5z" />
  </svg>
);
