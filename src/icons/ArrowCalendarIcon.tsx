interface ArrowCalendarIconProps extends React.SVGProps<SVGSVGElement> {
  direction?: "left" | "right";
}

export function ArrowCalendarIcon({
  direction = "right",
  ...props
}: ArrowCalendarIconProps) {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="white"
      {...props}
      style={direction === "left" ? { transform: "scaleX(-1)" } : {}}
    >
      <path d="M24.9993 20.5L16.666 28.8333L16.666 12.1667L24.9993 20.5Z" />
    </svg>
  );
}
