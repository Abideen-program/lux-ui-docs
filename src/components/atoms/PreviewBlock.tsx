'use client';

import { useState, ReactNode } from 'react';

export interface PreviewBlockProps {
  children: ReactNode;
  code: string;
  title?: string;
}

export default function PreviewBlock({ children, code, title }: PreviewBlockProps) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="preview-block">
      <div className="preview-header">
        <button className={`preview-tab-btn ${tab === 'preview' ? 'active' : ''}`} onClick={() => setTab('preview')}>
          Preview
        </button>
        <button className={`preview-tab-btn ${tab === 'code' ? 'active' : ''}`} onClick={() => setTab('code')}>
          Code
        </button>
        <button className={`preview-copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>

      {tab === 'preview' ? (
        <div className="preview-stage">{children}</div>
      ) : (
        <pre className="preview-code-block">{code}</pre>
      )}
    </div>
  );
}
