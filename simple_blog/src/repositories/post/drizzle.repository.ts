import { PostModel } from '@/models/post/post.model';
import { PostRepository } from './post.repository';
import { drizzleDB } from '@/db/drizzle';

export class DrizzlePostRepository implements PostRepository {
  async findAll(): Promise<PostModel[]> {
    const posts: PostModel[] = await drizzleDB.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const post: PostModel | undefined = await drizzleDB.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) {
      throw new Error('Post not found');
    }

    return post;
  }

  async findAllPublic(): Promise<PostModel[]> {
    const posts: PostModel[] = await drizzleDB.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    const post: PostModel | undefined = await drizzleDB.query.posts.findFirst({
      where: (posts, { and, eq }) =>
        and(eq(posts.slug, slug), eq(posts.published, true)),
    });

    if (!post) {
      throw new Error('Post not found or not published');
    }

    return post;
  }
}

// (async () => {
//   const repo = new DrizzlePostRepository();
//   // const posts = await repo.findAllPublic();

//   // posts.forEach(post => console.log(post.slug, post.published));

//   //find by id test
//   // const post = await repo.findById('99f8add4-7684-4c16-a316-616271db199e');
//   // console.log(post);

//   //find all test
//   // const allPosts = await repo.findAll();
//   // console.log('All posts count:', allPosts.length);

//   //find by slug public test
// })();
