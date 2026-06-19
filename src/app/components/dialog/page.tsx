'use client';
import { useState } from 'react';
import { Button, Dialog } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

function DialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button tone="danger" onClick={() => setOpen(true)}>Delete account</Button>
      <Dialog open={open} onClose={() => setOpen(false)} title="Delete account?" description="This cannot be undone." tone="danger" confirmLabel="Delete" onConfirm={() => setOpen(false)} />
    </>
  );
}

export default function Page() {
  return (
    <CompPageLayout name="Dialog" description="A confirmation dialog with confirm/cancel actions — ideal for destructive operations.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Dialog open={open} onClose={() => setOpen(false)} title="Delete account?"\n  description="This action cannot be undone." tone="danger"\n  confirmLabel="Delete" onConfirm={() => setOpen(false)} />`}>
          <DialogDemo />
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'open', type: 'boolean', description: 'Controls visibility.' },
        { name: 'title', type: 'ReactNode', description: 'Dialog title.' },
        { name: 'description', type: 'ReactNode', description: 'Supporting text.' },
        { name: 'confirmLabel', type: 'string', default: "'Confirm'", description: 'Confirm button label.' },
        { name: 'cancelLabel', type: 'string', default: "'Cancel'", description: 'Cancel button label.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Tone for the confirm button.' },
        { name: 'loading', type: 'boolean', default: 'false', description: 'Shows a spinner on the confirm button.' },
      ]} />
    </CompPageLayout>
  );
}
