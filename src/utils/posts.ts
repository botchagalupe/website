import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

export function getPostSlug(post: Post): string {
  return post.id.replace(/\.mdx?$/, "").replace(/\/index$/, "");
}

export function sortPostsByDateDesc(posts: Post[]): Post[] {
  return [...posts].sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
}

export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection("posts", ({ data }) => data.draft !== true);
  return sortPostsByDateDesc(posts);
}

export async function getRecentPosts(limit: number): Promise<Post[]> {
  const posts = await getPublishedPosts();
  return posts.slice(0, limit);
}
