import { Typography, H1, H2, H3, Lead, Body, Caption } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function TypographyPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Typography</h1>
      <p className="section-sub">Type scale with convenience exports for headings, body, and gradient text.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Scale</h3>
      <PreviewBlock code={`<H1>Heading One</H1>
<H2>Heading Two</H2>
<H3>Heading Three</H3>
<Lead>Lead paragraph text</Lead>
<Body>Body text</Body>
<Caption>Caption text</Caption>`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
          <H1>Heading One</H1>
          <H2>Heading Two</H2>
          <H3>Heading Three</H3>
          <Lead>Lead paragraph text</Lead>
          <Body>Body text</Body>
          <Caption>Caption text</Caption>
        </div>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Gradient</h3>
      <PreviewBlock code={`<Typography variant="h2" gradient="sunset">Sunset gradient</Typography>
<Typography variant="h2" gradient="ocean">Ocean gradient</Typography>`}>
        <Typography variant="h2" gradient="sunset">Sunset gradient</Typography>
        <Typography variant="h2" gradient="ocean">Ocean gradient</Typography>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'variant', type: "'hero' | 'display' | 'h1'-'h4' | 'lead' | 'body' | 'caption' | 'label' | 'overline' | 'code'", default: "'body'", description: 'Typography style preset.' },
        { name: 'as', type: 'ElementType', description: 'Render as a different HTML element.' },
        { name: 'gradient', type: "'electric' | 'sunset' | 'ocean' | 'fire' | 'aurora' | 'neon' | 'gold' | 'candy'", description: 'Text gradient preset.' },
        { name: 'weight', type: "'thin' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'black'", description: 'Font weight.' },
        { name: 'truncate', type: 'number', description: 'Truncate after N lines.' },
        { name: 'muted', type: 'boolean', default: 'false', description: 'Dims the text opacity.' },
      ]} />
    </section>
  );
}
