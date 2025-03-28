import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from '../styles/MarkdownContent.module.css';

export default function MarkdownContent({ content }) {
	const [markdownContent, setMarkdownContent] = useState('');

	useEffect(() => {
		setMarkdownContent(content || '');
	}, [content]);

	return (
		<div className={styles.markdownContent}>
			<ReactMarkdown>{markdownContent}</ReactMarkdown>
		</div>
	);
} 