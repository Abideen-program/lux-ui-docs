'use client';

import { Chip } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function ChipPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Chip</h1>
      <p className="section-sub">Compact elements for tags, filters, and selections — with optional delete button.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<Chip tone="primary">React</Chip>
<Chip tone="accent" onDelete={() => {}}>Removable</Chip>`}>
        <Chip tone="primary">React</Chip>
        <Chip tone="accent" onDelete={() => {}}>Removable</Chip>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Color tone.' },
        { name: 'variant', type: 'LuxVariant', default: "'soft'", description: 'Visual style.' },
        { name: 'size', type: 'LuxSize', default: "'sm'", description: 'Chip size.' },
        { name: 'icon', type: 'ReactNode', description: 'Leading icon.' },
        { name: 'onDelete', type: '(e) => void', description: 'Shows a delete button when provided.' },
        { name: 'selected', type: 'boolean', default: 'false', description: 'Adds a selected outline.' },
      ]} />
    </section>
  );
}
