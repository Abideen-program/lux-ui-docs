import { Alert } from 'lux-ui';
import PreviewBlock from '@/components/atoms/PreviewBlock';
import PropsTable from '@/components/atoms/PropsTable';
import CompPageLayout from '@/components/atoms/CompPageLayout';
import SectionLabel from '@/components/atoms/SectionLabel';
import { AlertRows } from '@/constant/data';

export default function AlertPage() {
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
      <PropsTable rows={AlertRows} />
    </CompPageLayout>
  );
}
