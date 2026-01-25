import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getContent(filename: string) {
  const filePath = path.join(process.cwd(), 'src/content', filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  return data;
}
