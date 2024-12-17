/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  storyblokEditable,
  StoryblokComponent,
  SbBlokData,
} from "@storyblok/react";

// Define a type for blok
interface Blok extends SbBlokData {
  columns?: {
    _uid: string;
    [key: string]: any;
  }[]; // Optional property
}

const Grid = ({ blok }: { blok: Blok }) => {
  return (
    <div className="grid grid-cols-3" {...storyblokEditable(blok)}>
      {/* Use nullish coalescing to provide a default empty array if columns is undefined */}
      {(blok.columns ?? []).map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
