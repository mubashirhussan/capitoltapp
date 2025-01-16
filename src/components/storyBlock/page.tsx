import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";

export default async function StoryBlockPage() {
  const slug = "home";

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
  });
  console.log("data11", data);
  return (
    <>
      <header>
        <div>test for prod</div>
        <h1>{data?.story?.name || "My StoryBlock Page"}</h1>
      </header>
      <StoryblokComponent blok={data.story.content} />
    </>
  );
}

export const revalidate = 3600; // ISR
