'use client';
import { VirtualList } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

const items = Array.from({ length: 5000 }, (_, i) => `Row ${i + 1}`);

export default function Page() {
  return (
    <CompPageLayout name="VirtualList" description="Renders only the visible rows of a large list — handles thousands of items smoothly.">
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
        { name: 'items', type: 'T[]', description: 'Full data array.' },
        { name: 'itemHeight', type: 'number', description: 'Fixed height of each row in px.' },
        { name: 'height', type: 'number', description: 'Visible container height in px.' },
        { name: 'renderItem', type: '(item: T, index: number) => ReactNode', description: 'Row renderer.' },
        { name: 'overscan', type: 'number', default: '5', description: 'Extra rows rendered above/below the visible window.' },
      ]} />
    </CompPageLayout>
  );
}
