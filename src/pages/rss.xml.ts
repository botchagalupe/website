import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { profile } from "../data/profile";
import { getPostSlug, getPublishedPosts } from "../utils/posts";

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: `${profile.name} Writing`,
    description: profile.shortBio,
    site: context.site?.toString() ?? "https://example.com",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/writing/${getPostSlug(post)}`,
      categories: post.data.tags
    }))
  });
}
