import { TiltCard } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="TiltCard" description="A card with a 3D perspective tilt on mouse move, plus a glare overlay.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<TiltCard variant="glass" maxTilt={15} glare style={{ width: 200, padding: '1.5rem' }}>\n  Move your cursor over me\n</TiltCard>`}>
          <TiltCard variant="glass" maxTilt={15} glare style={{ width: 200, padding: '1.5rem' }}>
            Move your cursor over me
          </TiltCard>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'maxTilt', type: 'number', default: '12', description: 'Maximum tilt angle in degrees.' },
        { name: 'scale', type: 'number', default: '1.02', description: 'Scale on hover.' },
        { name: 'glare', type: 'boolean', default: 'true', description: 'Adds a light glare effect that follows the cursor.' },
        { name: 'variant', type: 'CardVariant', default: "'glass'", description: 'Visual style — same as Card.' },
      ]} />
    </CompPageLayout>
  );
}
