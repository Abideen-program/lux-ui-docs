import { MagneticButton } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="MagneticButton" description="A button that follows the cursor slightly on hover, for a tactile feel.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<MagneticButton tone="primary" strength={0.5}>Hover me</MagneticButton>`}>
          <MagneticButton tone="primary" strength={0.5}>Hover me</MagneticButton>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'strength', type: 'number', default: '0.4', description: 'How strongly the button follows the cursor (0-1).' },
        { name: 'variant', type: 'LuxVariant', default: "'solid'", description: 'Visual style — same as Button.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Color tone.' },
      ]} />
    </CompPageLayout>
  );
}
