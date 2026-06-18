import { MagneticButton } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function MagneticButtonPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">MagneticButton</h1>
      <p className="section-sub">A button that follows the cursor slightly on hover, for a tactile feel.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<MagneticButton tone="primary" strength={0.5}>Hover me</MagneticButton>`}>
        <MagneticButton tone="primary" strength={0.5}>Hover me</MagneticButton>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'strength', type: 'number', default: '0.4', description: 'How strongly the button follows the cursor (0-1).' },
        { name: 'variant', type: 'LuxVariant', default: "'solid'", description: 'Visual style — same as Button.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Color tone.' },
      ]} />
    </section>
  );
}
