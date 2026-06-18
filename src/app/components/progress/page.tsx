import { Progress } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function ProgressPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Progress</h1>
      <p className="section-sub">Linear and circular progress indicators, determinate or indeterminate.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Linear</h3>
      <PreviewBlock code={`<Progress value={65} showLabel />`}>
        <div style={{ width: 240 }}><Progress value={65} showLabel /></div>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Circular</h3>
      <PreviewBlock code={`<Progress variant="circular" value={72} showLabel />`}>
        <Progress variant="circular" value={72} showLabel />
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'value', type: 'number', default: '0', description: 'Progress value 0-100.' },
        { name: 'variant', type: "'linear' | 'circular'", default: "'linear'", description: 'Display style.' },
        { name: 'indeterminate', type: 'boolean', default: 'false', description: 'Animated loading state without a known value.' },
        { name: 'showLabel', type: 'boolean', default: 'false', description: 'Shows percentage text.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Bar/ring color.' },
      ]} />
    </section>
  );
}
