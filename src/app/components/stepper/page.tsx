import { Stepper } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';
import SampleDataBlock from '@/components/SampleDataBlock';

export default function Page() {
  return (
    <CompPageLayout name="Stepper" description="Shows progress through a multi-step process.">
      <div className="comp-section">
        <SectionLabel>Data shape</SectionLabel>
        <SampleDataBlock title="StepData[]" code={`interface StepData {\n  label: string;\n  description?: string;\n  icon?: ReactNode;\n}\n\nconst steps: StepData[] = [\n  { label: 'Account' },\n  { label: 'Profile' },\n  { label: 'Confirm' },\n];`} />
      </div>

      <div className="comp-section">
        <SectionLabel>Horizontal</SectionLabel>
        <PreviewBlock code={`<Stepper activeStep={1} steps={steps} />`}>
          <div style={{ width: '100%' }}>
            <Stepper activeStep={1} steps={[{ label: 'Account' }, { label: 'Profile' }, { label: 'Confirm' }]} />
          </div>
        </PreviewBlock>
      </div>

      <PropsTable rows={[
        { name: 'steps', type: 'StepData[]', description: 'Array of { label, description?, icon? }.' },
        { name: 'activeStep', type: 'number', description: 'Current step index (0-indexed).' },
        { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Layout direction.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Color for active/completed steps.' },
      ]} />
    </CompPageLayout>
  );
}
