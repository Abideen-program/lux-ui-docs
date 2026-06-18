import { Alert } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function AlertPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Alert</h1>
      <p className="section-sub">Inline messages for success, error, warning, and info states.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Tones</h3>
      <PreviewBlock code={`<Alert tone="success" title="Saved">Your changes were saved.</Alert>
<Alert tone="danger" title="Error">Something went wrong.</Alert>`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
          <Alert tone="success" title="Saved">Your changes were saved.</Alert>
          <Alert tone="danger" title="Error">Something went wrong.</Alert>
        </div>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'tone', type: 'LuxTone', default: "'info'", description: 'Color tone.' },
        { name: 'title', type: 'ReactNode', description: 'Bold title text.' },
        { name: 'icon', type: 'ReactNode', description: 'Custom icon (defaults based on tone).' },
        { name: 'variant', type: "'solid' | 'soft' | 'outline'", default: "'soft'", description: 'Visual style.' },
        { name: 'onClose', type: '() => void', description: 'Shows a close button when provided.' },
      ]} />
    </section>
  );
}
