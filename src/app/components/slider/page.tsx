'use client';
import { useState } from 'react';
import { Slider } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  const [value, setValue] = useState(50);
  return (
    <CompPageLayout name="Slider" description="A draggable slider for selecting a numeric value within a range.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Slider value={value} onChange={setValue} showValue label="Volume" />`}>
          <div style={{ width: '100%', maxWidth: 300 }}><Slider value={value} onChange={setValue} showValue label="Volume" /></div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'value', type: 'number', description: 'Controlled value.' },
        { name: 'min', type: 'number', default: '0', description: 'Minimum value.' },
        { name: 'max', type: 'number', default: '100', description: 'Maximum value.' },
        { name: 'step', type: 'number', default: '1', description: 'Increment step.' },
        { name: 'onChange', type: '(value: number) => void', description: 'Change handler.' },
        { name: 'showValue', type: 'boolean', default: 'false', description: 'Shows the current value as a label.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Track and thumb color.' },
      ]} />
    </CompPageLayout>
  );
}
