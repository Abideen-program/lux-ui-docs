import { Select } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function SelectPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Select</h1>
      <p className="section-sub">A native select element styled to match the Lux design system.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<Select
  label="Country"
  placeholder="Choose a country"
  options={[
    { value: 'ng', label: 'Nigeria' },
    { value: 'us', label: 'United States' },
  ]}
/>`}>
        <Select
          label="Country"
          placeholder="Choose a country"
          options={[
            { value: 'ng', label: 'Nigeria' },
            { value: 'us', label: 'United States' },
          ]}
        />
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'options', type: 'SelectOption[]', description: 'Array of { value, label, disabled? } objects.' },
        { name: 'label', type: 'string', description: 'Field label.' },
        { name: 'placeholder', type: 'string', description: 'Placeholder option shown first.' },
        { name: 'hint', type: 'string', description: 'Helper text.' },
        { name: 'error', type: 'string', description: 'Error message.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Field size.' },
      ]} />
    </section>
  );
}
