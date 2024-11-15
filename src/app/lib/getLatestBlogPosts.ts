// lib/getLatestBlogPosts.ts
import { supabase } from './supabaseClient';
import { BlogPost } from './@types/types';

export const getLatestBlogPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blogs') // Replace with your actual table name
    .select('*')
    .order('created_at', { ascending: false })
    .limit(3);

  if (error) {
    console.error("Error fetching latest blog posts:", error);
    return [];
  }

  return data as BlogPost[];
};
