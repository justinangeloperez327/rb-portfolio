import type { MetadataRoute } from "next";

import { profile } from "@/lib/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} Portfolio`,
    short_name: profile.shortName,
    description: profile.description,
    start_url: "/",
    display: "standalone",
    background_color: "#05070A",
    theme_color: "#05070A",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
