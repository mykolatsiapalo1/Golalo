interface ArrowCalendarIconProps extends React.SVGProps<SVGSVGElement> {
  direction?: "left" | "right";
}

export function ArrowIcon({
  direction = "left",
  ...props
}: ArrowCalendarIconProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="#495057"
      {...props}
      style={direction === "right" ? { transform: "scaleX(-1)" } : {}}
    >
      <path d="M16.3324 20.596L9.73633 13.9999L16.3324 7.40388L17.5617 8.63326L12.1951 13.9999L17.5617 19.3666L16.3324 20.596Z" />
    </svg>
  );
}
