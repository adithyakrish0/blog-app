import { fetchPosts } from "@/lib/api";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://your-domain.com";
  
  try {
    const posts = await fetchPosts();
    
    const postUrls = posts.map((post) => ({
      url: `${baseUrl}/posts/${post.id}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
    
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 1,
      },
      ...postUrls,
    ];
  } catch (error) {
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 1,
      },
    ];
  }
}
