'use client';

import { Button, useToast } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

function ToastDemo() {
  const toast = useToast();
  return (
    <Button onClick={() => toast('Changes saved successfully', { tone: 'success', title: 'Saved' })}>
      Show Toast
    </Button>
  );
}

export default function ToastPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Toast</h1>
      <p className="section-sub">Imperative, auto-dismissing notifications via the <code>useToast()</code> hook. Wrap your app in <code>ToastProvider</code> once.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Usage</h3>
      <PreviewBlock code={`const toast = useToast();
toast('Changes saved successfully', { tone: 'success', title: 'Saved' });`}>
        <ToastDemo />
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Setup</h3>
      <pre className="preview-code" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
{`// app/layout.tsx
import { ToastProvider } from 'lux-ui';

export default function RootLayout({ children }) {
  return <ToastProvider>{children}</ToastProvider>;
}`}
      </pre>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>toast() options</h3>
      <PropsTable rows={[
        { name: 'title', type: 'string', description: 'Bold title line.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Color tone.' },
        { name: 'duration', type: 'number', default: '4000', description: 'Auto-dismiss time in ms. 0 disables auto-dismiss.' },
        { name: 'icon', type: 'ReactNode', description: 'Custom icon.' },
      ]} />
    </section>
  );
}
