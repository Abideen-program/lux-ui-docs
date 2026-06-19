import { Card, GlassCard, NeonCard, AuroraCard } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function CardPage() {
  return (
    <CompPageLayout name="Card" description="A flexible surface for grouping content, with glass, neon, and aurora variants for visual personality.">
      <div className="comp-section">
        <SectionLabel>Variants</SectionLabel>
        <PreviewBlock code={`<GlassCard style={{ width: 150, padding: '1.25rem' }}>Glass</GlassCard>\n<NeonCard style={{ width: 150, padding: '1.25rem' }}>Neon</NeonCard>\n<AuroraCard style={{ width: 150, padding: '1.25rem' }}>Aurora</AuroraCard>`}>
          <GlassCard style={{ width: 150, padding: '1.25rem' }}>Glass</GlassCard>
          <NeonCard style={{ width: 150, padding: '1.25rem' }}>Neon</NeonCard>
          <AuroraCard style={{ width: 150, padding: '1.25rem' }}>Aurora</AuroraCard>
        </PreviewBlock>
      </div>
      <div className="comp-section">
        <SectionLabel>Elevation</SectionLabel>
        <PreviewBlock code={`<Card elevation="low" style={{ padding: '1.25rem' }}>Low</Card>\n<Card elevation="mid" style={{ padding: '1.25rem' }}>Mid</Card>\n<Card elevation="float" style={{ padding: '1.25rem' }}>Float</Card>`}>
          <Card elevation="low" style={{ padding: '1.25rem' }}>Low</Card>
          <Card elevation="mid" style={{ padding: '1.25rem' }}>Mid</Card>
          <Card elevation="float" style={{ padding: '1.25rem' }}>Float</Card>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'variant', type: "'default' | 'glass' | 'neon' | 'aurora' | 'matte' | 'raised' | 'outline'", default: "'default'", description: 'Visual style of the card.' },
        { name: 'radius', type: 'LuxRadius', default: "'xl'", description: 'Border radius.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Internal padding density.' },
        { name: 'hoverable', type: 'boolean', default: 'false', description: 'Adds a subtle hover motion effect.' },
        { name: 'glow', type: 'boolean', default: 'false', description: 'Adds a soft glow.' },
        { name: 'elevation', type: "'none' | 'xs' | 'low' | 'mid' | 'high' | 'float'", default: "'low'", description: 'Shadow depth.' },
      ]} />
    </CompPageLayout>
  );
}
