import { useAvatarUrl } from "@/lib/couple";
import { cn } from "@/lib/utils";

export function Avatar({
  path,
  name,
  className,
}: {
  path?: string | null;
  name?: string | null;
  className?: string;
}) {
  const { data: url } = useAvatarUrl(path);
  return (
    <div
      className={cn(
        "grid size-10 shrink-0 place-items-center overflow-hidden rounded-full bg-sand font-display text-muted-foreground",
        className,
      )}
    >
      {url ? (
        <img src={url} alt={name ?? ""} className="size-full object-cover" />
      ) : (
        <span>{(name || "·").charAt(0).toUpperCase()}</span>
      )}
    </div>
  );
}
