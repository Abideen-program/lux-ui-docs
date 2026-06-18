'use client';

import { useState } from 'react';
import { Pagination } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function PaginationPage() {
  const [page, setPage] = useState(4);

  return (
    <section className="content-section">
      <h1 className="section-heading">Pagination</h1>
      <p className="section-sub">Page navigation with smart ellipsis collapsing for large page counts.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<Pagination page={page} count={10} onChange={setPage} />`}>
        <Pagination page={page} count={10} onChange={setPage} />
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'page', type: 'number', description: 'Current page (1-indexed).' },
        { name: 'count', type: 'number', description: 'Total number of pages.' },
        { name: 'onChange', type: '(page: number) => void', description: 'Page change handler.' },
        { name: 'siblings', type: 'number', default: '1', description: 'Pages shown around the current page.' },
        { name: 'showFirstLast', type: 'boolean', default: 'false', description: 'Shows first/last page buttons.' },
      ]} />
    </section>
  );
}
