export interface BlogPost {
    id: number;
    title: string;
    featured_img: string;
    blog_title: string;
    blog_description: string;
    author: string;
    tags: Record<string, []>;
    interactions: Record<string, number>;
}
  