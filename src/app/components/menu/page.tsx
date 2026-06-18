'use client';

import { Menu, Button } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function MenuPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Menu</h1>
      <p className="section-sub">A dropdown menu anchored to a trigger element.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<Menu
  trigger={<Button variant="outline">Options</Button>}
  items={[
    { label: 'Edit', onClick: () => {} },
    { label: 'Duplicate', onClick: () => {} },
    { divider: true },
    { label: 'Delete', danger: true, onClick: () => {} },
  ]}
/>`}>
        <Menu
          trigger={<Button variant="outline">Options</Button>}
          items={[
            { label: 'Edit', onClick: () => {} },
            { label: 'Duplicate', onClick: () => {} },
            { divider: true, label: '', onClick: () => {} },
            { label: 'Delete', danger: true, onClick: () => {} },
          ]}
        />
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'trigger', type: 'ReactNode', description: 'Element that opens the menu on click.' },
        { name: 'items', type: 'MenuItemData[]', description: 'Array of { label, icon?, onClick?, disabled?, danger?, divider? }.' },
        { name: 'placement', type: "'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'", default: "'bottom-start'", description: 'Menu position relative to trigger.' },
      ]} />
    </section>
  );
}
