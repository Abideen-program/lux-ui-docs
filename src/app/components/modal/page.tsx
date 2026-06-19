'use client';
import { useState } from 'react';
import { Button, Modal } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

function ModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Edit profile">
        <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Modal content goes here.</p>
      </Modal>
    </>
  );
}

export default function Page() {
  return (
    <CompPageLayout name="Modal" description="A centered dialog with backdrop, Escape-to-close, and portal rendering.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Modal open={open} onClose={() => setOpen(false)} title="Edit profile">\n  Modal content goes here.\n</Modal>`}>
          <ModalDemo />
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'open', type: 'boolean', description: 'Controls visibility.' },
        { name: 'onClose', type: '() => void', description: 'Called on backdrop click or Escape.' },
        { name: 'title', type: 'ReactNode', description: 'Modal title.' },
        { name: 'footer', type: 'ReactNode', description: 'Footer content (action buttons).' },
        { name: 'maxWidth', type: 'number | string', default: '480', description: 'Maximum modal width.' },
        { name: 'closeOnBackdropClick', type: 'boolean', default: 'true', description: 'Close when clicking outside.' },
        { name: 'closeOnEscape', type: 'boolean', default: 'true', description: 'Close on Escape key.' },
      ]} />
    </CompPageLayout>
  );
}
