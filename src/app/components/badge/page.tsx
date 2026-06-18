import { Badge } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function BadgePage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Badge</h1>
      <p className="section-sub">Small status or count indicators.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Tones</h3>
      <PreviewBlock code={`<Badge tone="primary">New</Badge>
<Badge tone="success">Active</Badge>
<Badge tone="danger">Failed</Badge>
<Badge tone="warning">Pending</Badge>`}>
        <Badge tone="primary">New</Badge>
        <Badge tone="success">Active</Badge>
        <Badge tone="danger">Failed</Badge>
        <Badge tone="warning">Pending</Badge>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Color tone.' },
        { name: 'variant', type: "'default' | 'dot' | 'counter' | 'pill'", default: "'default'", description: 'Badge style.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Badge size.' },
        { name: 'count', type: 'number', description: 'Number shown when variant is "counter".' },
      ]} />
    </section>
  );
}
