/* eslint-disable @typescript-eslint/no-explicit-any */
import { storyblokEditable } from "@storyblok/react";

interface FeatureBlok {
  headline: string;
  [key: string]: any; // Allows for other dynamic properties if necessary
}
const Feature = ({ blok }: { blok: FeatureBlok }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);

export default Feature;
