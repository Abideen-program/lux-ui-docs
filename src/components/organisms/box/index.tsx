import { Box } from 'lux-ui';
import PreviewBlock from '@/components/atoms/PreviewBlock';
import PropsTable from '@/components/atoms/PropsTable';
import CompPageLayout from '@/components/atoms/CompPageLayout';
import SectionLabel from '@/components/atoms/SectionLabel';
import { BoxRows } from '@/constant/data';

export default function BoxPage() {
  return (
    <CompPageLayout name="Box" description="A generic layout primitive with shorthand spacing props.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Box p={4} style={{ background: 'var(--lux-surface-1)', borderRadius: 8 }}>\n  Padded box\n</Box>`}>
          <Box p={4} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8 }}>Padded box</Box>
        </PreviewBlock>
      </div>
      <PropsTable rows={BoxRows} />
    </CompPageLayout>
  );
}
