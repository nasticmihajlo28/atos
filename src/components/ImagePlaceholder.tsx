import type { CSSProperties } from "react";

type ImagePlaceholderProps = {
  label: string;
  radius?: number | string;
  className?: string;
};

/**
 * Drop-zone stand-in for a photo the client supplies later.
 * In production these become <Image> / <img> tags pointing at /public/uploads.
 */
export default function ImagePlaceholder({
  label,
  radius = 4,
  className,
}: ImagePlaceholderProps) {
  const style: CSSProperties = {
    width: "100%",
    height: "100%",
    borderRadius: typeof radius === "number" ? `${radius}px` : radius,
    background: "linear-gradient(135deg, #f2ebe2, #e7dccf 55%, #d9c7b3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  };

  return (
    <div style={style} className={className}>
      <span
        style={{
          fontSize: 12,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "#a2917d",
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        {label}
      </span>
    </div>
  );
}
