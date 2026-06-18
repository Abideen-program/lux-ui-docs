import { Card, GlassCard, NeonCard, AuroraCard } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function CardPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Card</h1>
      <p className="section-sub">A flexible surface for grouping content, with glass, neon, and aurora variants for visual personality.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Variants</h3>
      <PreviewBlock code={`<GlassCard style={{ width: 160, padding: '1.25rem' }}>Glass</GlassCard>
<NeonCard style={{ width: 160, padding: '1.25rem' }}>Neon</NeonCard>
<AuroraCard style={{ width: 160, padding: '1.25rem' }}>Aurora</AuroraCard>`}>
        <GlassCard style={{ width: 160, padding: '1.25rem' }}>Glass</GlassCard>
        <NeonCard style={{ width: 160, padding: '1.25rem' }}>Neon</NeonCard>
        <AuroraCard style={{ width: 160, padding: '1.25rem' }}>Aurora</AuroraCard>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Elevation</h3>
      <PreviewBlock code={`<Card elevation="low" style={{ padding: '1.25rem' }}>Low</Card>
<Card elevation="mid" style={{ padding: '1.25rem' }}>Mid</Card>
<Card elevation="float" style={{ padding: '1.25rem' }}>Float</Card>`}>
        <Card elevation="low" style={{ padding: '1.25rem' }}>Low</Card>
        <Card elevation="mid" style={{ padding: '1.25rem' }}>Mid</Card>
        <Card elevation="float" style={{ padding: '1.25rem' }}>Float</Card>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'variant', type: "'default' | 'glass' | 'neon' | 'aurora' | 'matte' | 'raised' | 'outline'", default: "'default'", description: 'Visual style of the card.' },
        { name: 'radius', type: 'LuxRadius', default: "'xl'", description: 'Border radius.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Internal padding density.' },
        { name: 'hoverable', type: 'boolean', default: 'false', description: 'Adds a subtle hover motion effect.' },
        { name: 'glow', type: 'boolean', default: 'false', description: 'Adds a soft glow.' },
        { name: 'elevation', type: "'none' | 'xs' | 'low' | 'mid' | 'high' | 'float'", default: "'low'", description: 'Shadow depth.' },
      ]} />
    </section>
  );
}
