import Image from "next/image";
import type { CSSProperties } from "react";

type PhotoProps = {
  src: string;
  alt: string;
  radius?: number | string;
  sizes?: string;
  priority?: boolean;
};

/**
 * A photo that fills its parent slot (cover). Parent controls the size/shape.
 */
export default function Photo({
  src,
  alt,
  radius = 4,
  sizes = "100vw",
  priority = false,
}: PhotoProps) {
  const style: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: typeof radius === "number" ? `${radius}px` : radius,
    overflow: "hidden",
  };

  return (
    <div style={style}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
