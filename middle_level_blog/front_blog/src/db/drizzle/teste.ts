import { PostModel } from '@/models/post/post.model';
import { drizzleDB } from '.';
import { postsTable } from './schemas';

(async () => {
  const posts: PostModel[] = await drizzleDB.select().from(postsTable);

  posts.forEach(post => {
    console.log(` - ${post.title} `);
  });
})();
