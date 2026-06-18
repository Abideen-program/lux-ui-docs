'use client';

import { useState } from 'react';
import { Slider } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function SliderPage() {
  const [value, setValue] = useState(50);

  return (
    <section className="content-section">
      <h1 className="section-heading">Slider</h1>
      <p className="section-sub">A draggable slider for selecting a numeric value within a range.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<Slider value={value} onChange={setValue} showValue label="Volume" />`}>
        <div style={{ width: 280 }}>
          <Slider value={value} onChange={setValue} showValue label="Volume" />
        </div>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'value', type: 'number', description: 'Controlled value.' },
        { name: 'min', type: 'number', default: '0', description: 'Minimum value.' },
        { name: 'max', type: 'number', default: '100', description: 'Maximum value.' },
        { name: 'step', type: 'number', default: '1', description: 'Increment step.' },
        { name: 'onChange', type: '(value: number) => void', description: 'Change handler.' },
        { name: 'showValue', type: 'boolean', default: 'false', description: 'Shows the current value as a label.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Track and thumb color.' },
      ]} />
    </section>
  );
}
