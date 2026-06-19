'use client';
import { Button, useToast } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

function ToastDemo() {
  const toast = useToast();
  return <Button onClick={() => toast('Changes saved successfully', { tone: 'success', title: 'Saved' })}>Show Toast</Button>;
}

export default function Page() {
  return (
    <CompPageLayout name="Toast" description="Imperative, auto-dismissing notifications via the useToast() hook. Wrap your app in ToastProvider once.">
      <div className="comp-section">
        <SectionLabel>Usage</SectionLabel>
        <PreviewBlock code={`const toast = useToast();\ntoast('Changes saved successfully', { tone: 'success', title: 'Saved' });`}>
          <ToastDemo />
        </PreviewBlock>
      </div>
      <div className="comp-section">
        <SectionLabel>Setup</SectionLabel>
        <div className="code-block">
          <div className="code-block-header">app/layout.tsx</div>
          <pre className="code-block-inner">{`import { ToastProvider } from 'lux-ui';\n\nexport default function RootLayout({ children }) {\n  return <ToastProvider>{children}</ToastProvider>;\n}`}</pre>
        </div>
      </div>
      <PropsTable rows={[
        { name: 'title', type: 'string', description: 'Bold title line.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Color tone.' },
        { name: 'duration', type: 'number', default: '4000', description: 'Auto-dismiss time in ms. 0 disables auto-dismiss.' },
        { name: 'icon', type: 'ReactNode', description: 'Custom icon.' },
      ]} />
    </CompPageLayout>
  );
}
