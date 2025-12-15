import { PostModel } from '@/models/post/post.model';
import { PostRepository } from '@/repositories/post/post.repository';
import { resolve } from 'path';
import fs from 'fs';
import { PostsSchema } from '@/models/post/post.schema';
import { SIMULATED_DELAY_MS } from '@/lib/constants';
import { simulateDelay } from '@/utils/async-delay';

const ROOT_DIR = process.cwd();
const JSON_POSTS_PATH = resolve(ROOT_DIR, 'src', 'db', 'seed', 'posts.json');

export class JsonPostRepository implements PostRepository {
  private async _readFromDisk(): Promise<PostModel[]> {
    await simulateDelay(SIMULATED_DELAY_MS);

    const data = await fs.promises.readFile(JSON_POSTS_PATH, 'utf-8');
    const json = JSON.parse(data);

    const result = PostsSchema.safeParse(json);

    if (!result.success) {
      throw new Error('JSON inválido para PostModel');
    }

    const publishedPosts = result.data.posts.filter(post => post.published);

    return publishedPosts;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await this._readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this._readFromDisk();

    const post = posts.find(post => post.id === id);

    if (!post) {
      throw new Error('Post not found');
    }

    return post;
  }

  async findAllPublic(): Promise<PostModel[]> {
    const posts = await this._readFromDisk();
    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find(post => post.slug === slug);

    if (!post) throw new Error('Post not found');

    return post;
  }

  // mutations
  create(post: PostModel): Promise<PostModel> {
    throw new Error('Method not implemented.');
  }
  update(
    id: string,
    newPostData: Omit<PostModel, 'id' | 'slug' | 'createdAt' | 'updatedAt'>,
  ): Promise<PostModel> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<PostModel> {
    throw new Error(`${id} Method not implemented.`);
  }
}
