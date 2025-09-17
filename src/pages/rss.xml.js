import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const allPosts = await getCollection("blog");

  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: "https://first-blog-build.netlify.app",
    items: allPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/posts/${post.id}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
