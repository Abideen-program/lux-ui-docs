'use client';
import { useState } from 'react';
import { Rating } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  const [value, setValue] = useState(3.5);
  return (
    <CompPageLayout name="Rating" description="A star rating input with optional half-star precision.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Rating value={value} onChange={setValue} allowHalf />`}>
          <Rating value={value} onChange={setValue} allowHalf />
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'value', type: 'number', description: 'Controlled rating value.' },
        { name: 'max', type: 'number', default: '5', description: 'Number of stars.' },
        { name: 'onChange', type: '(value: number) => void', description: 'Change handler.' },
        { name: 'allowHalf', type: 'boolean', default: 'false', description: 'Allows half-star precision.' },
        { name: 'readOnly', type: 'boolean', default: 'false', description: 'Display-only mode.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Star size.' },
      ]} />
    </CompPageLayout>
  );
}
