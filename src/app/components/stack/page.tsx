import { Stack } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

const box = { background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '0.6rem 1rem', fontSize: '0.8rem' };

export default function Page() {
  return (
    <CompPageLayout name="Stack" description="A flexbox wrapper for one-dimensional layouts, with optional dividers between items.">
      <div className="comp-section">
        <SectionLabel>Row with divider</SectionLabel>
        <PreviewBlock code={`<Stack direction="row" gap={3} divider={<div style={{ width: 1, background: 'var(--lux-border)' }} />}>\n  <div>One</div>\n  <div>Two</div>\n  <div>Three</div>\n</Stack>`}>
          <Stack direction="row" gap={3} divider={<div style={{ width: 1, background: 'var(--border-2)' }} />}>
            <div style={box}>One</div>
            <div style={box}>Two</div>
            <div style={box}>Three</div>
          </Stack>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'direction', type: "'row' | 'column'", default: "'column'", description: 'Flex direction.' },
        { name: 'gap', type: 'number | string', default: '4', description: 'Gap between items.' },
        { name: 'align', type: "'start' | 'center' | 'end' | 'stretch' | 'baseline'", description: 'Cross-axis alignment.' },
        { name: 'justify', type: "'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'", description: 'Main-axis alignment.' },
        { name: 'wrap', type: 'boolean', default: 'false', description: 'Allow items to wrap.' },
        { name: 'divider', type: 'ReactNode', description: 'Element rendered between each item.' },
      ]} />
    </CompPageLayout>
  );
}
