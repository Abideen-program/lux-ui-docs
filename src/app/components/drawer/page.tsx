'use client';
import { useState } from 'react';
import { Button, Drawer } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

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

export default function Page() {
  return (
    <CompPageLayout name="Drawer" description="A sliding panel from any edge of the screen.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Drawer open={open} onClose={() => setOpen(false)} title="Settings" placement="right">\n  Drawer content goes here.\n</Drawer>`}>
          <DrawerDemo />
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'open', type: 'boolean', description: 'Controls visibility.' },
        { name: 'onClose', type: '() => void', description: 'Close handler.' },
        { name: 'placement', type: "'left' | 'right' | 'top' | 'bottom'", default: "'right'", description: 'Edge the drawer slides from.' },
        { name: 'size', type: 'number | string', default: '320', description: 'Width (left/right) or height (top/bottom).' },
        { name: 'title', type: 'ReactNode', description: 'Drawer title.' },
      ]} />
    </CompPageLayout>
  );
}
