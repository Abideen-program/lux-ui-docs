import { Checkbox, RadioGroup } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Checkbox" description="Checkbox and RadioGroup for binary and single-choice selections.">
      <div className="comp-section">
        <SectionLabel>Checkbox</SectionLabel>
        <PreviewBlock code={`<Checkbox label="Subscribe to newsletter" />\n<Checkbox label="Disabled" disabled />`}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Checkbox label="Subscribe to newsletter" />
            <Checkbox label="Disabled" disabled />
          </div>
        </PreviewBlock>
      </div>
      <div className="comp-section">
        <SectionLabel>RadioGroup</SectionLabel>
        <PreviewBlock code={`<RadioGroup name="plan" value="pro"\n  options={[{ value: 'free', label: 'Free' }, { value: 'pro', label: 'Pro' }]}\n/>`}>
          <RadioGroup name="plan" value="pro" options={[{ value: 'free', label: 'Free' }, { value: 'pro', label: 'Pro' }]} />
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'label', type: 'string', description: 'Label text.' },
        { name: 'hint', type: 'string', description: 'Helper text below the label.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Checkbox dimensions.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Color when checked.' },
        { name: 'indeterminate', type: 'boolean', default: 'false', description: 'Shows a dash instead of a checkmark.' },
      ]} />
    </CompPageLayout>
  );
}
