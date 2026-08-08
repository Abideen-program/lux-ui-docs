import { ConfettiButton } from 'lux-ui';
import PreviewBlock from '@/components/atoms/PreviewBlock';
import PropsTable from '@/components/atoms/PropsTable';
import CompPageLayout from '@/components/atoms/CompPageLayout';
import SectionLabel from '@/components/atoms/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="ConfettiButton" description="Fires a confetti burst from the click position via window.Lux.confetti().">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<ConfettiButton tone="success" count={100}>Celebrate</ConfettiButton>`}>
          <ConfettiButton tone="success" count={100}>Celebrate 🎉</ConfettiButton>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'count', type: 'number', default: '80', description: 'Number of confetti particles.' },
        { name: 'onConfetti', type: '() => void', description: 'Called after confetti fires.' },
      ]} />
    </CompPageLayout>
  );
}
