import { Typography, H1, H2, H3, Lead, Body, Caption } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Typography" description="Type scale with convenience exports for headings, body, and gradient text.">
      <div className="comp-section">
        <SectionLabel>Scale</SectionLabel>
        <PreviewBlock code={`<H1>Heading One</H1>\n<H2>Heading Two</H2>\n<H3>Heading Three</H3>\n<Lead>Lead paragraph</Lead>\n<Body>Body text</Body>\n<Caption>Caption text</Caption>`}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
            <H1>Heading One</H1>
            <H2>Heading Two</H2>
            <H3>Heading Three</H3>
            <Lead>Lead paragraph</Lead>
            <Body>Body text</Body>
            <Caption>Caption text</Caption>
          </div>
        </PreviewBlock>
      </div>
      <div className="comp-section">
        <SectionLabel>Gradient</SectionLabel>
        <PreviewBlock code={`<Typography variant="h2" gradient="sunset">Sunset gradient</Typography>\n<Typography variant="h2" gradient="ocean">Ocean gradient</Typography>`}>
          <Typography variant="h2" gradient="sunset">Sunset gradient</Typography>
          <Typography variant="h2" gradient="ocean">Ocean gradient</Typography>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'variant', type: "'hero' | 'display' | 'h1'-'h4' | 'lead' | 'body' | 'caption' | 'label' | 'overline' | 'code'", default: "'body'", description: 'Typography style preset.' },
        { name: 'as', type: 'ElementType', description: 'Render as a different HTML element.' },
        { name: 'gradient', type: "'electric' | 'sunset' | 'ocean' | 'fire' | 'aurora' | 'neon' | 'gold' | 'candy'", description: 'Text gradient preset.' },
        { name: 'weight', type: "'thin'-'black'", description: 'Font weight.' },
        { name: 'truncate', type: 'number', description: 'Truncate after N lines.' },
        { name: 'muted', type: 'boolean', default: 'false', description: 'Dims the text opacity.' },
      ]} />
    </CompPageLayout>
  );
}
