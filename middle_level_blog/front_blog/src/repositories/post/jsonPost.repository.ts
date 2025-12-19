import { PostModel } from '@/models/post/post.model';
import { PostRepository } from '@/repositories/post/post.repository';
import { resolve } from 'path';
import fs from 'fs';
import { PostsSchema } from '@/models/post/post.schema';
// const simulateDelayMS = Number(process.env.simulateDelayMS);

// import { simulateDelay } from '@/utils/async-delay';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

export class JsonPostRepository implements PostRepository {
  private async _readFromDisk(): Promise<PostModel[]> {
    // await simulateDelay(simulateDelayMS);

    const data = await fs.promises.readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const json = JSON.parse(data);

    const result = PostsSchema.safeParse(json);

    if (!result.success) {
      throw new Error('JSON inválido para PostModel');
    }

    const publishedPosts = result.data.posts.filter(post => post.published);

    return publishedPosts;
  }

  private async writeToDisk(posts: PostModel[]): Promise<void> {
    const jsonToString = JSON.stringify({ posts }, null, 2);
    await fs.promises.writeFile(JSON_POSTS_FILE_PATH, jsonToString, 'utf-8');
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
  async create(post: PostModel): Promise<PostModel> {
    const posts = await this.findAll();

    if (!post.id || !post.slug) {
      throw new Error('Post sem ID ou Slug');
    }

    const idOrSlugExist = posts.find(
      savedPost => savedPost.id === post.id || savedPost.slug === post.slug,
    );

    if (idOrSlugExist) {
      throw new Error('ID ou Slug devem ser únicos');
    }

    posts.push(post);
    await this.writeToDisk(posts);

    return post;
  }

  async update(
    id: string,
    newPostData: Omit<PostModel, 'id' | 'slug' | 'createdAt' | 'updatedAt'>,
  ): Promise<PostModel> {
    const posts = await this.findAll();
    const postIndex = posts.findIndex(p => p.id === id);
    const savedPost = posts[postIndex];

    if (postIndex < 0) {
      throw new Error('Post não existe');
    }

    const newPost = {
      ...savedPost,
      ...newPostData,
      updatedAt: new Date().toISOString(),
    };
    posts[postIndex] = newPost;
    await this.writeToDisk(posts);
    return newPost;
  }
  async delete(id: string): Promise<PostModel> {
    const posts = await this.findAll();
    const postIndex = posts.findIndex(p => p.id === id);

    if (postIndex < 0) {
      throw new Error('Post não existe');
    }

    const post = posts[postIndex];
    posts.splice(postIndex, 1);
    await this.writeToDisk(posts);

    return post;
  }
}
