import { z } from 'zod';
import { PostSchema } from './post.schema';

export type PostModel = z.infer<typeof PostSchema>;
