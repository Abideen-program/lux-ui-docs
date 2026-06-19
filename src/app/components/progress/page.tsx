import { Progress } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Progress" description="Linear and circular progress indicators, determinate or indeterminate.">
      <div className="comp-section">
        <SectionLabel>Linear</SectionLabel>
        <PreviewBlock code={`<Progress value={65} showLabel />`}>
          <div style={{ width: 240 }}><Progress value={65} showLabel /></div>
        </PreviewBlock>
      </div>
      <div className="comp-section">
        <SectionLabel>Circular</SectionLabel>
        <PreviewBlock code={`<Progress variant="circular" value={72} showLabel />`}>
          <Progress variant="circular" value={72} showLabel />
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'value', type: 'number', default: '0', description: 'Progress value 0-100.' },
        { name: 'variant', type: "'linear' | 'circular'", default: "'linear'", description: 'Display style.' },
        { name: 'indeterminate', type: 'boolean', default: 'false', description: 'Animated loading state without a known value.' },
        { name: 'showLabel', type: 'boolean', default: 'false', description: 'Shows percentage text.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Bar/ring color.' },
      ]} />
    </CompPageLayout>
  );
}
