'use client';
import { useState } from 'react';
import { ColorPicker } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';
import SampleDataBlock from '@/components/SampleDataBlock';

export default function Page() {
  const [color, setColor] = useState('#6366f1');

  return (
    <CompPageLayout name="ColorPicker" description="Preset swatches plus a native color input, in a single popover.">
      <div className="comp-section">
        <SectionLabel>Data shape (optional)</SectionLabel>
        <p style={{ fontSize: '0.85rem', color: 'var(--fg-2)', marginBottom: '1rem' }}>
          <code style={{ color: 'var(--cyan)' }}>presets</code> is just an array of hex strings — pass your own brand colors, or omit it to use the built-in 8-color default set.
        </p>
        <SampleDataBlock code={`const presets: string[] = [\n  '#6366f1', '#f472b6', '#38bdf8', '#22c55e',\n  '#f59e0b', '#ef4444', '#8b5cf6', '#14b8a6',\n];`} />
      </div>

      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<ColorPicker value={color} onChange={setColor} label="Theme Color" />`}>
          <ColorPicker value={color} onChange={setColor} label="Theme Color" />
        </PreviewBlock>
      </div>

      <PropsTable rows={[
        { name: 'value', type: 'string', default: "'#6366f1'", description: 'Current hex color.' },
        { name: 'onChange', type: '(color: string) => void', description: 'Change handler.' },
        { name: 'presets', type: 'string[]', description: 'Array of hex swatches shown above the native picker.' },
        { name: 'label', type: 'string', description: 'Field label.' },
      ]} />
    </CompPageLayout>
  );
}
