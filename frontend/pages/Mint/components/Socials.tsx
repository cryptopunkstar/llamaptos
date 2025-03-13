import { FC } from "react";
// Internal components
import { buttonVariants } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
// Internal config
import { config } from "@/config";
// Internal assets
import Twitter from "@/assets/icons/twitter.svg";

export const Socials: FC = () => {
  if (!config.socials) return null;

  return (
    <ul className="flex gap-4">
      {config.socials.twitter && (
        <li>
          <a
            target="_blank"
            href={config.socials.twitter}
            className={buttonVariants({ variant: "icon", size: "icon" })}
          >
            <Image src={Twitter} className="dark:invert" />
          </a>
        </li>
      )}
      
    </ul>
  );
};
