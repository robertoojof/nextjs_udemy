import { PostModel } from '@/models/post/post.model';
import { PostRepository } from '@/repositories/post/post.repository';
import { resolve } from 'path';
import fs from 'fs';
import { PostsSchema } from '@/models/post/post.schema';
import { simulateDelay } from '@/lib/utils';

const ROOT_DIR = process.cwd();
const JSON_POSTS_PATH = resolve(ROOT_DIR, 'src', 'db', 'seed', 'posts.json');

const SIMULATED_DELAY_MS: number = 0;

export class JsonPostRepository implements PostRepository {
  private async _readFromDisk(): Promise<PostModel[]> {
    const data = await fs.promises.readFile(JSON_POSTS_PATH, 'utf-8');
    const json = JSON.parse(data);

    const result = PostsSchema.safeParse(json);

    if (!result.success) {
      throw new Error('JSON inválido para PostModel');
    }

    const publishedPosts = result.data.posts.filter(post => post.published);

    return publishedPosts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await simulateDelay(SIMULATED_DELAY_MS);

    const posts = await this._readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel | null> {
    const posts = await this._readFromDisk();

    const post = posts.find(post => post.id === id) || null;

    return post;
  }
}
