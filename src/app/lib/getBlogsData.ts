import { supabase } from './supabaseClient';
import { BlogPost } from './@types/types';

export const getBlogsData = async (): Promise<BlogPost[]> => {
   const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false }); // Order by 'created_at' in descending order

   if (error) {
      console.error(error);
      return [];
   }
   return data as BlogPost[];
};
