import { DrizzlePostRepository } from './drizzle.repository';
import { PostRepository } from './post.repository';
// import { JsonPostRepository } from './jsonPost.repository';

// export const postRepository: PostRepository = new JsonPostRepository();
export const postRepository: PostRepository = new DrizzlePostRepository();
