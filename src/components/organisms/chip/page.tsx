'use client';
import { Chip } from 'lux-ui';
import PreviewBlock from '@/components/atoms/PreviewBlock';
import PropsTable from '@/components/atoms/PropsTable';
import CompPageLayout from '@/components/atoms/CompPageLayout';
import SectionLabel from '@/components/atoms/SectionLabel';
import { ChipRows } from '@/constant/data';

export default function Page() {
  return (
    <CompPageLayout name="Chip" description="Compact elements for tags, filters, and selections — with optional delete button.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Chip tone="primary">React</Chip>\n<Chip tone="accent" onDelete={() => {}}>Removable</Chip>`}>
          <Chip tone="primary">React</Chip>
          <Chip tone="accent" onDelete={() => { }}>Removable</Chip>
        </PreviewBlock>
      </div>
      <PropsTable rows={ChipRows} />
    </CompPageLayout>
  );
}
