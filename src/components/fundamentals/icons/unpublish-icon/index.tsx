import React from "react"
import IconProps from "./types/icon-type"

const UnpublishIcon: React.FC<IconProps> = ({
  size = "24px",
  color = "currentColor",
  attributes,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M9.16667 3.33337H4C3.60218 3.33337 3.22064 3.48388 2.93934 3.75179C2.65804 4.0197 2.5 4.38306 2.5 4.76195V11.9048C2.5 12.2837 2.65804 12.647 2.93934 12.915C3.22064 13.1829 3.60218 13.3334 4 13.3334H16C16.3978 13.3334 16.7794 13.1829 17.0607 12.915C17.342 12.647 17.5 12.2837 17.5 11.9048V11.6667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.08398 16.6666H12.9173"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13.3334V16.6667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5007 3.33337L13.334 7.50004"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.334 3.33337L17.5007 7.50004"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default UnpublishIcon
