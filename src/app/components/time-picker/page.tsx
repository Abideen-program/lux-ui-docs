'use client';
import { useState } from 'react';
import { TimePicker } from 'lux-ui';
import PreviewBlock from '@/components/atoms/PreviewBlock';
import PropsTable from '@/components/atoms/PropsTable';
import CompPageLayout from '@/components/atoms/CompPageLayout';
import SectionLabel from '@/components/atoms/SectionLabel';

export default function Page() {
  const [time, setTime] = useState('09:00');
  return (
    <CompPageLayout name="TimePicker" description="A scrollable hour/minute picker with 12 or 24-hour format support.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<TimePicker value={time} onChange={setTime} label="Pick a time" use12Hour />`}>
          <div style={{ width: '100%', maxWidth: 260 }}>
            <TimePicker value={time} onChange={setTime} label="Pick a time" use12Hour />
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'value', type: 'string', description: '"HH:MM" in 24-hour format.' },
        { name: 'onChange', type: '(time: string) => void', description: 'Change handler.' },
        { name: 'use12Hour', type: 'boolean', default: 'true', description: 'Shows AM/PM toggle.' },
        { name: 'minuteStep', type: 'number', default: '5', description: 'Minute increment in the list.' },
        { name: 'label', type: 'string', description: 'Field label.' },
      ]} />
    </CompPageLayout>
  );
}
