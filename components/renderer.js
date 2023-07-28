import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

const MarkdownRenderer = ({ markdown }) => {
  return <ReactMarkdown remarkPlugins={[gfm]}>{markdown}</ReactMarkdown>;
};

export default MarkdownRenderer;