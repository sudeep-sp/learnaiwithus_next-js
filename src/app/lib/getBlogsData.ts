// lib/getTasks.ts
import { supabase } from './supabaseClient';
import { BlogPost } from './@types/types';

export const getBlogsData = async (): Promise<BlogPost[]> => {
   const { data, error } = await supabase
      .from('blogs')
      .select('*');

   if (error) {
      console.error(error);
      return [];
   }
   return data as BlogPost[];
};
