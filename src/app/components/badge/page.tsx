import { Badge } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Badge" description="Small status or count indicators.">
      <div className="comp-section">
        <SectionLabel>Tones</SectionLabel>
        <PreviewBlock code={`<Badge tone="primary">New</Badge>\n<Badge tone="success">Active</Badge>\n<Badge tone="danger">Failed</Badge>\n<Badge tone="warning">Pending</Badge>`}>
          <Badge tone="primary">New</Badge>
          <Badge tone="success">Active</Badge>
          <Badge tone="danger">Failed</Badge>
          <Badge tone="warning">Pending</Badge>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Color tone.' },
        { name: 'variant', type: "'default' | 'dot' | 'counter' | 'pill'", default: "'default'", description: 'Badge style.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Badge size.' },
        { name: 'count', type: 'number', description: 'Number shown when variant is "counter".' },
      ]} />
    </CompPageLayout>
  );
}
