'use client';

import { useState } from 'react';
import { Button, Drawer } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

function DrawerDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)} title="Settings" placement="right">
        <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Drawer content goes here.</p>
      </Drawer>
    </>
  );
}

export default function DrawerPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Drawer</h1>
      <p className="section-sub">A sliding panel from any edge of the screen.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<Drawer open={open} onClose={() => setOpen(false)} title="Settings" placement="right">
  Drawer content goes here.
</Drawer>`}>
        <DrawerDemo />
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'open', type: 'boolean', description: 'Controls visibility.' },
        { name: 'onClose', type: '() => void', description: 'Close handler.' },
        { name: 'placement', type: "'left' | 'right' | 'top' | 'bottom'", default: "'right'", description: 'Edge the drawer slides from.' },
        { name: 'size', type: 'number | string', default: '320', description: 'Width (left/right) or height (top/bottom).' },
        { name: 'title', type: 'ReactNode', description: 'Drawer title.' },
      ]} />
    </section>
  );
}
