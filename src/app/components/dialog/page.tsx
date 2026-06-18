'use client';

import { useState } from 'react';
import { Button, Dialog } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

function DialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button tone="danger" onClick={() => setOpen(true)}>Delete account</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Delete account?"
        description="This action cannot be undone. All your data will be permanently removed."
        tone="danger"
        confirmLabel="Delete"
        onConfirm={() => setOpen(false)}
      />
    </>
  );
}

export default function DialogPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Dialog</h1>
      <p className="section-sub">A confirmation dialog with confirm/cancel actions — ideal for destructive operations.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<Dialog
  open={open}
  onClose={() => setOpen(false)}
  title="Delete account?"
  description="This action cannot be undone."
  tone="danger"
  confirmLabel="Delete"
  onConfirm={() => setOpen(false)}
/>`}>
        <DialogDemo />
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'open', type: 'boolean', description: 'Controls visibility.' },
        { name: 'title', type: 'ReactNode', description: 'Dialog title.' },
        { name: 'description', type: 'ReactNode', description: 'Supporting text.' },
        { name: 'confirmLabel', type: 'string', default: "'Confirm'", description: 'Confirm button label.' },
        { name: 'cancelLabel', type: 'string', default: "'Cancel'", description: 'Cancel button label.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Tone for the confirm button.' },
        { name: 'loading', type: 'boolean', default: 'false', description: 'Shows a spinner on the confirm button.' },
      ]} />
    </section>
  );
}
