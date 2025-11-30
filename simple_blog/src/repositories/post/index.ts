import { JsonPostRepository } from './jsonPost.repository';
import { PostRepository } from './post.repository';

export const postRepository: PostRepository = new JsonPostRepository();
