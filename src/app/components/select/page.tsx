import { Select } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Select" description="A native select element styled to match the Lux design system.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Select label="Country" placeholder="Choose a country"\n  options={[{ value: 'ng', label: 'Nigeria' }, { value: 'us', label: 'United States' }]}\n/>`}>
          <div style={{ width: '100%', maxWidth: 280 }}>
            <Select label="Country" placeholder="Choose a country" options={[{ value: 'ng', label: 'Nigeria' }, { value: 'us', label: 'United States' }]} />
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'options', type: 'SelectOption[]', description: 'Array of { value, label, disabled? } objects.' },
        { name: 'label', type: 'string', description: 'Field label.' },
        { name: 'placeholder', type: 'string', description: 'Placeholder option shown first.' },
        { name: 'hint', type: 'string', description: 'Helper text.' },
        { name: 'error', type: 'string', description: 'Error message.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Field size.' },
      ]} />
    </CompPageLayout>
  );
}
