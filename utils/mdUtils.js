import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Get content directory
const contentDirectory = path.join(process.cwd(), 'content');

// Get content file data
export function getContentData(filename) {
	// Get file path
	const filePath = path.join(contentDirectory, `${filename}.md`);

	// Read file as string
	const fileContents = fs.readFileSync(filePath, 'utf8');

	// Use gray-matter to parse the metadata section
	const { data, content } = matter(fileContents);

	return {
		metadata: data,
		content
	};
} 