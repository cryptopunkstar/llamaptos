import Placeholder1 from "@/assets/placeholders/modularweb3.png";

import { COLLECTION_ADDRESS } from "./constants";

export const config: Config = {
  collection_id: COLLECTION_ADDRESS,

  // Removing one or all of these socials will remove them from the page
  socials: {
    twitter: "https://x.com/_modular_web3",
    discord: "#",
    homepage: "#",
  },

  defaultCollection: {
    name: "Llamaptos",
    description: "Llamaptos is a NFTs collection fan Aptos Network ! Unique collection cosmonaut Llama on desert market crypto survival new generation blockchain langage $MOVE !",
    image: Placeholder1,
  },

  ourStory: {
    title: "Llamaptos Story",
    subTitle: "Llama cosmonaut",
    description:
      "A llama on the planet Aptos is heading towards its mission of exploring the next generation blockchain. The Llama represents the innovation of an animal cosmonaut. The NFTs are infinite to reach as many people as possible to mint the artifact!",
    discordLink: "https://x.com/_modular_web3",
    images: [Placeholder1],
  },

  ourTeam: {
    title: "Our Team",
    members: [
      {
        name: "Modularweb3",
        role: "Dev",
        img: Placeholder1,
        socials: {
          twitter: "https://x.com/_modular_web3",
        },
      },
  
    ],
  },

};

export interface Config {
  collection_id: string;

  socials?: {
    twitter?: string;
    discord?: string;
    homepage?: string;
  };

  defaultCollection?: {
    name: string;
    description: string;
    image: string;
  };

  ourTeam?: {
    title: string;
    members: Array<ConfigTeamMember>;
  };

  ourStory?: {
    title: string;
    subTitle: string;
    description: string;
    discordLink: string;
    images?: Array<string>;
  };

  faqs?: {
    title: string;
    questions: Array<{
      title: string;
      description: string;
    }>;
  };

  nftBanner?: Array<string>;
}

export interface ConfigTeamMember {
  name: string;
  role: string;
  img: string;
  socials?: {
    twitter?: string;
    discord?: string;
  };
}
