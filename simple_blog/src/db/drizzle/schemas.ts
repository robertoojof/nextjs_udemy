import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { createSelectSchema } from 'drizzle-zod';
import z from 'zod';

export const postsTable = sqliteTable('posts', {
  id: text('id').unique().primaryKey(),
  slug: text('slug').unique().notNull(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  coverImageUrl: text('cover_image_url').notNull(),
  published: integer('published', { mode: 'boolean' }).notNull(),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export const postsSelectSchema = createSelectSchema(postsTable);

export const postsInsertSchema = postsSelectSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type PostsTableSelectModel = z.infer<typeof postsSelectSchema>;

export type PostsTableInsertModel = z.infer<typeof postsInsertSchema>;
