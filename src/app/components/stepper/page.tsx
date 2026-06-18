import { Stepper } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function StepperPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Stepper</h1>
      <p className="section-sub">Shows progress through a multi-step process.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Horizontal</h3>
      <PreviewBlock code={`<Stepper
  activeStep={1}
  steps={[
    { label: 'Account' },
    { label: 'Profile' },
    { label: 'Confirm' },
  ]}
/>`}>
        <div style={{ width: '100%' }}>
          <Stepper
            activeStep={1}
            steps={[
              { label: 'Account' },
              { label: 'Profile' },
              { label: 'Confirm' },
            ]}
          />
        </div>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'steps', type: 'StepData[]', description: 'Array of { label, description?, icon? }.' },
        { name: 'activeStep', type: 'number', description: 'Current step index (0-indexed).' },
        { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Layout direction.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Color for active/completed steps.' },
      ]} />
    </section>
  );
}
