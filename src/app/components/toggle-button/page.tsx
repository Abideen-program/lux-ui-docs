'use client';
import { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  const [align, setAlign] = useState('left');

  return (
    <CompPageLayout name="ToggleButton" description="Single or multi-select toggle buttons, grouped together.">
      <div className="comp-section">
        <SectionLabel>Single select</SectionLabel>
        <PreviewBlock code={`<ToggleButtonGroup value={align} onChange={(v) => setAlign(v as string)}>\n  <ToggleButton value="left">Left</ToggleButton>\n  <ToggleButton value="center">Center</ToggleButton>\n  <ToggleButton value="right">Right</ToggleButton>\n</ToggleButtonGroup>`}>
          <ToggleButtonGroup value={align} onChange={(v) => setAlign(v as string)}>
            <ToggleButton value="left">Left</ToggleButton>
            <ToggleButton value="center">Center</ToggleButton>
            <ToggleButton value="right">Right</ToggleButton>
          </ToggleButtonGroup>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'value', type: 'string | string[]', description: '(Group) Selected value(s).' },
        { name: 'multiple', type: 'boolean', default: 'false', description: '(Group) Allow multiple selection.' },
        { name: 'onChange', type: '(value) => void', description: '(Group) Change handler.' },
        { name: 'value', type: 'string', description: '(ToggleButton) This button\'s value.' },
        { name: 'icon', type: 'ReactNode', description: '(ToggleButton) Leading icon.' },
      ]} />
    </CompPageLayout>
  );
}
