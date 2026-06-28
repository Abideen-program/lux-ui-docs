'use client';
import { useState } from 'react';
import { InfiniteScroll } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  const [items, setItems] = useState(Array.from({ length: 8 }, (_, i) => `Item ${i + 1}`));
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    setTimeout(() => {
      setItems(prev => {
        const next = [...prev, ...Array.from({ length: 5 }, (_, i) => `Item ${prev.length + i + 1}`)];
        if (next.length >= 30) setHasMore(false);
        return next;
      });
    }, 500);
  };

  return (
    <CompPageLayout name="InfiniteScroll" description="Loads more content automatically as the user scrolls near the bottom, using IntersectionObserver.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<InfiniteScroll hasMore={hasMore} onLoadMore={loadMore} endMessage="No more items">\n  {items.map(item => <div key={item}>{item}</div>)}\n</InfiniteScroll>`}>
          <div style={{ width: '100%', maxHeight: 220, overflowY: 'auto', border: '1px solid var(--border-2)', borderRadius: 12, padding: '0.5rem' }}>
            <InfiniteScroll hasMore={hasMore} onLoadMore={loadMore} endMessage="No more items">
              {items.map(item => (
                <div key={item} style={{ padding: '0.5rem 0.75rem', fontSize: '0.82rem', borderBottom: '1px solid var(--border)' }}>{item}</div>
              ))}
            </InfiniteScroll>
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'onLoadMore', type: '() => void', description: 'Called when the sentinel enters the viewport.' },
        { name: 'hasMore', type: 'boolean', description: 'Whether more data is available.' },
        { name: 'loading', type: 'boolean', default: 'false', description: 'Shows the loading indicator.' },
        { name: 'loader', type: 'ReactNode', description: 'Custom loading indicator.' },
        { name: 'endMessage', type: 'ReactNode', description: 'Message shown when hasMore is false.' },
        { name: 'threshold', type: 'string', default: "'200px'", description: 'Root margin — how far before the end to trigger.' },
      ]} />
    </CompPageLayout>
  );
}
