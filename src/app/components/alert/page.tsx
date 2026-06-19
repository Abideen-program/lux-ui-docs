import { Alert } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Alert" description="Inline messages for success, error, warning, and info states.">
      <div className="comp-section">
        <SectionLabel>Tones</SectionLabel>
        <PreviewBlock code={`<Alert tone="success" title="Saved">Your changes were saved.</Alert>\n<Alert tone="danger" title="Error">Something went wrong.</Alert>`}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
            <Alert tone="success" title="Saved">Your changes were saved.</Alert>
            <Alert tone="danger" title="Error">Something went wrong.</Alert>
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'tone', type: 'LuxTone', default: "'info'", description: 'Color tone.' },
        { name: 'title', type: 'ReactNode', description: 'Bold title text.' },
        { name: 'icon', type: 'ReactNode', description: 'Custom icon (defaults based on tone).' },
        { name: 'variant', type: "'solid' | 'soft' | 'outline'", default: "'soft'", description: 'Visual style.' },
        { name: 'onClose', type: '() => void', description: 'Shows a close button when provided.' },
      ]} />
    </CompPageLayout>
  );
}
