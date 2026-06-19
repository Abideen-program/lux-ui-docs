'use client';
import { useState } from 'react';
import { Pagination } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  const [page, setPage] = useState(4);
  return (
    <CompPageLayout name="Pagination" description="Page navigation with smart ellipsis collapsing for large page counts.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Pagination page={page} count={10} onChange={setPage} />`}>
          <Pagination page={page} count={10} onChange={setPage} />
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'page', type: 'number', description: 'Current page (1-indexed).' },
        { name: 'count', type: 'number', description: 'Total number of pages.' },
        { name: 'onChange', type: '(page: number) => void', description: 'Page change handler.' },
        { name: 'siblings', type: 'number', default: '1', description: 'Pages shown around the current page.' },
        { name: 'showFirstLast', type: 'boolean', default: 'false', description: 'Shows first/last page buttons.' },
      ]} />
    </CompPageLayout>
  );
}
