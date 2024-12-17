/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { storyblokEditable } from "@storyblok/react";

// Define the type for blok (e.g., with headline)
interface TeaserBlok {
  headline: string;
  [key: string]: any; // Allows for other dynamic properties if necessary
}

const Teaser = ({ blok }: { blok: TeaserBlok }) => {
  return (
    <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};

export default Teaser;
