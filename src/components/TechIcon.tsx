import { cn } from "@/lib/utils";
import { getTechIconUrl } from "@/data/techIcons";

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

const boostList = new Set(["django"]);

const TechIcon = ({ name, size = 16, className }: TechIconProps) => {
  const src = getTechIconUrl(name);
  const normalized = name.trim().toLowerCase();
  const needsBoost = boostList.has(normalized);

  if (!src) return null;

  return (
    <img
      src={src}
      alt={`${name} icon`}
      loading="lazy"
      decoding="async"
      style={{
        width: size,
        height: size,
        filter: needsBoost ? "brightness(2.1) saturate(1.35)" : undefined,
      }}
      className={cn("inline-block", className)}
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
  );
};

export default TechIcon;
