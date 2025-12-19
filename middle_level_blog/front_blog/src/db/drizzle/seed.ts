import { PostModel } from '@/models/post/post.model';
import { JsonPostRepository } from '@/repositories/post/jsonPost.repository';
import { drizzleDB } from '.';
import { postsTable } from './schemas';

(async () => {
  const jsonRepo: JsonPostRepository = new JsonPostRepository();
  const posts: PostModel[] = await jsonRepo.findAll();
  try {
    await drizzleDB.delete(postsTable); // Clear existing data
    await drizzleDB.insert(postsTable).values(posts);
  } catch (error) {
    console.error('Error seeding database:', error);
  }

  console.log(`Foram inseridos ${posts.length} posts`);
})();
