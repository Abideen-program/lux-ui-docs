'use client';
import { Chip } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Chip" description="Compact elements for tags, filters, and selections — with optional delete button.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Chip tone="primary">React</Chip>\n<Chip tone="accent" onDelete={() => {}}>Removable</Chip>`}>
          <Chip tone="primary">React</Chip>
          <Chip tone="accent" onDelete={() => {}}>Removable</Chip>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Color tone.' },
        { name: 'variant', type: 'LuxVariant', default: "'soft'", description: 'Visual style.' },
        { name: 'size', type: 'LuxSize', default: "'sm'", description: 'Chip size.' },
        { name: 'icon', type: 'ReactNode', description: 'Leading icon.' },
        { name: 'onDelete', type: '(e) => void', description: 'Shows a delete button when provided.' },
        { name: 'selected', type: 'boolean', default: 'false', description: 'Adds a selected outline.' },
      ]} />
    </CompPageLayout>
  );
}
