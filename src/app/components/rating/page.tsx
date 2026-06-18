'use client';

import { useState } from 'react';
import { Rating } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function RatingPage() {
  const [value, setValue] = useState(3.5);

  return (
    <section className="content-section">
      <h1 className="section-heading">Rating</h1>
      <p className="section-sub">A star rating input with optional half-star precision.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<Rating value={value} onChange={setValue} allowHalf />`}>
        <Rating value={value} onChange={setValue} allowHalf />
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'value', type: 'number', description: 'Controlled rating value.' },
        { name: 'max', type: 'number', default: '5', description: 'Number of stars.' },
        { name: 'onChange', type: '(value: number) => void', description: 'Change handler.' },
        { name: 'allowHalf', type: 'boolean', default: 'false', description: 'Allows half-star precision.' },
        { name: 'readOnly', type: 'boolean', default: 'false', description: 'Display-only mode.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Star size.' },
      ]} />
    </section>
  );
}
