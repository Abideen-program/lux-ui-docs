import { Box } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Box" description="A generic layout primitive with shorthand spacing props.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Box p={4} style={{ background: 'var(--lux-surface-1)', borderRadius: 8 }}>\n  Padded box\n</Box>`}>
          <Box p={4} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8 }}>Padded box</Box>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'as', type: 'ElementType', default: "'div'", description: 'Render as a different element.' },
        { name: 'p / px / py', type: 'number | string', description: 'Padding (number = multiples of 0.25rem).' },
        { name: 'm / mx / my', type: 'number | string', description: 'Margin (number = multiples of 0.25rem).' },
        { name: 'w / h', type: 'number | string', description: 'Width / height.' },
      ]} />
    </CompPageLayout>
  );
}
