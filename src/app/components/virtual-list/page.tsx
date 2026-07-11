'use client';
import { VirtualList } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';
import SampleDataBlock from '@/components/SampleDataBlock';

const items = Array.from({ length: 5000 }, (_, i) => `Row ${i + 1}`);

export default function Page() {
  return (
    <CompPageLayout name="VirtualList" description="Renders only the visible rows of a large list — handles thousands of items smoothly.">
      <div className="comp-section">
        <SectionLabel>Data shape</SectionLabel>
        <p style={{ fontSize: '0.85rem', color: 'var(--fg-2)', marginBottom: '1rem' }}>
          <code style={{ color: 'var(--cyan)' }}>items</code> can be any array — strings, objects, whatever <code style={{ color: 'var(--cyan)' }}>renderItem</code> knows how to render. The three numbers that matter are <code style={{ color: 'var(--cyan)' }}>itemHeight</code> (fixed row height), <code style={{ color: 'var(--cyan)' }}>height</code> (visible scroll area), and <code style={{ color: 'var(--cyan)' }}>overscan</code> (extra rows rendered just outside the viewport for smoother scrolling).
        </p>
        <SampleDataBlock code={`// items can be any type — string[], objects, etc.\nconst items = Array.from({ length: 5000 }, (_, i) => \`Row \${i + 1}\`);\n\n// or with objects:\n// const items: User[] = [{ id: 1, name: 'Ada' }, { id: 2, name: 'Alan' }, ...];`} />
      </div>

      <div className="comp-section">
        <SectionLabel>5,000 items</SectionLabel>
        <PreviewBlock code={`<VirtualList\n  items={items}\n  itemHeight={32}\n  height={200}\n  renderItem={(item) => <div>{item}</div>}\n/>`}>
          <div style={{ width: '100%' }}>
            <VirtualList
              items={items}
              itemHeight={32}
              height={200}
              renderItem={(item) => <div style={{ padding: '0 0.5rem', fontSize: '0.82rem', display: 'flex', alignItems: 'center', height: '100%', borderBottom: '1px solid var(--border)' }}>{item}</div>}
            />
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'items', type: 'T[]', description: 'Full data array — any type.' },
        { name: 'itemHeight', type: 'number', description: 'Fixed height of each row in px.' },
        { name: 'height', type: 'number', description: 'Visible container height in px.' },
        { name: 'renderItem', type: '(item: T, index: number) => ReactNode', description: 'Row renderer.' },
        { name: 'overscan', type: 'number', default: '5', description: 'Extra rows rendered above/below the visible window.' },
      ]} />
    </CompPageLayout>
  );
}
