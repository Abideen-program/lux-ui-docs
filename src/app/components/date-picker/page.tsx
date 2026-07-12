'use client';
import { useState } from 'react';
import { DatePicker } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <CompPageLayout name="DatePicker" description="A calendar popup for selecting a single date, with min/max constraints.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<DatePicker value={date} onChange={setDate} label="Pick a date" />`}>
          <div style={{ width: '100%', maxWidth: 260 }}>
            <DatePicker value={date} onChange={setDate} label="Pick a date" />
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'value', type: 'Date | null', description: 'Selected date.' },
        { name: 'onChange', type: '(date: Date) => void', description: 'Change handler.' },
        { name: 'label', type: 'string', description: 'Field label.' },
        { name: 'minDate', type: 'Date', description: 'Earliest selectable date.' },
        { name: 'maxDate', type: 'Date', description: 'Latest selectable date.' },
        { name: 'weekStartsOn', type: '0 | 1', default: '0', description: '0 = Sunday, 1 = Monday.' },
        { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Stretches to 100% width.' },
      ]} />
    </CompPageLayout>
  );
}
