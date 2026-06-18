'use client';

import { useState, ReactNode } from 'react';

export interface PreviewBlockProps {
  /** The live rendered component */
  children: ReactNode;
  /** Code to display, pre-tokenized as JSX-like markup (or plain string) */
  code: string;
}

export default function PreviewBlock({ children, code }: PreviewBlockProps) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="preview-block">
      {tab === 'preview' ? (
        <div className="preview-stage">{children}</div>
      ) : (
        <div style={{ position: 'relative' }}>
          <button className="copy-btn" onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</button>
          <pre className="preview-code">{code}</pre>
        </div>
      )}
      <div className="preview-tabs">
        <div className={`preview-tab ${tab === 'preview' ? 'active' : ''}`} onClick={() => setTab('preview')}>Preview</div>
        <div className={`preview-tab ${tab === 'code' ? 'active' : ''}`} onClick={() => setTab('code')}>Code</div>
      </div>
    </div>
  );
}
