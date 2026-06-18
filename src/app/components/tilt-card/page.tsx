import { TiltCard } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function TiltCardPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">TiltCard</h1>
      <p className="section-sub">A card with a 3D perspective tilt on mouse move, plus a glare overlay.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<TiltCard variant="glass" maxTilt={15} glare style={{ width: 200, padding: '1.5rem' }}>
  Move your cursor over me
</TiltCard>`}>
        <TiltCard variant="glass" maxTilt={15} glare style={{ width: 200, padding: '1.5rem' }}>
          Move your cursor over me
        </TiltCard>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'maxTilt', type: 'number', default: '12', description: 'Maximum tilt angle in degrees.' },
        { name: 'scale', type: 'number', default: '1.02', description: 'Scale on hover.' },
        { name: 'glare', type: 'boolean', default: 'true', description: 'Adds a light glare effect that follows the cursor.' },
        { name: 'variant', type: 'CardVariant', default: "'glass'", description: 'Visual style — same as Card.' },
      ]} />
    </section>
  );
}
