import { drizzle } from 'drizzle-orm/better-sqlite3';
import { postsTable } from './schemas';
import Database from 'better-sqlite3';
import { resolve } from 'path';

const sqliteDataBaseFilePath = resolve(process.cwd(), './db.sqlite3');
const sqlLiteDB = new Database(sqliteDataBaseFilePath);

export const drizzleDB = drizzle(sqlLiteDB, {
  schema: {
    posts: postsTable,
  },
  // logger: true,
});
