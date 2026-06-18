import { Checkbox, RadioGroup } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function CheckboxPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Checkbox</h1>
      <p className="section-sub">Checkbox and RadioGroup for binary and single-choice selections.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Checkbox</h3>
      <PreviewBlock code={`<Checkbox label="Subscribe to newsletter" />
<Checkbox label="Disabled" disabled />`}>
        <Checkbox label="Subscribe to newsletter" />
        <Checkbox label="Disabled" disabled />
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>RadioGroup</h3>
      <PreviewBlock code={`<RadioGroup
  name="plan"
  value="pro"
  options={[
    { value: 'free', label: 'Free' },
    { value: 'pro', label: 'Pro' },
  ]}
/>`}>
        <RadioGroup
          name="plan"
          value="pro"
          options={[
            { value: 'free', label: 'Free' },
            { value: 'pro', label: 'Pro' },
          ]}
        />
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props — Checkbox</h3>
      <PropsTable rows={[
        { name: 'label', type: 'string', description: 'Label text.' },
        { name: 'hint', type: 'string', description: 'Helper text below the label.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Checkbox dimensions.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Color when checked.' },
        { name: 'indeterminate', type: 'boolean', default: 'false', description: 'Shows a dash instead of a checkmark.' },
      ]} />
    </section>
  );
}
