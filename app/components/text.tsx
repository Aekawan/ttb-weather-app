interface TextProps {
  children: React.ReactNode;
  colorMode?: "light" | "dark" | "";
  className?: string;
}

export default function Text({
  children,
  colorMode = "",
  className = ""
}: TextProps) {
  return <p className={
    colorMode === "dark" ? `text-black ${className}` : `text-white ${className}`
  }>
    {children}
  </p>;
}