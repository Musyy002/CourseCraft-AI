import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Initialize Neon client
const sql = neon(process.env.NEXT_PUBLIC_DB_CONNECTION_STRING);

// Pass the `sql` client directly to Drizzle
export const db = drizzle(sql);
