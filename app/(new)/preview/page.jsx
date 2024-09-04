import React from 'react';
import dynamic from 'next/dynamic';
import 'md-editor-rt/lib/style.css';

// Dynamically import MdEditor with no SSR
const MdEditor = dynamic(() => import('md-editor-rt'), { ssr: false });

async function fetchMarkdownContent() {
  // Replace this with actual data fetching logic from your database
  const response = await fetch('https://api.example.com/markdown-content');
  const data = await response.json();
  return data.markdownContent;
}

export default async function ArticlePage() {
  const markdownContent = `\`\`\`js
  await fetchMarkdownContent();
  \`\`\``

  return (
    <div>
      <h1>Article</h1>
      <MdEditor modelValue={markdownContent} previewOnly />
    </div>
  );
}
