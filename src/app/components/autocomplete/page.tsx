'use client';
import { useState } from 'react';
import { Autocomplete } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';
import SampleDataBlock from '@/components/SampleDataBlock';

export default function Page() {
  const [value, setValue] = useState('');

  return (
    <CompPageLayout name="Autocomplete" description="A searchable dropdown with keyboard navigation (arrow keys + Enter) and click-outside to close.">
      <div className="comp-section">
        <SectionLabel>Data shape</SectionLabel>
        <SampleDataBlock title="AutocompleteOption[]" code={`interface AutocompleteOption {\n  value: string;\n  label: string;\n}\n\nconst options: AutocompleteOption[] = [\n  { value: '1', label: 'Apple' },\n  { value: '2', label: 'Banana' },\n  { value: '3', label: 'Cherry' },\n];`} />
      </div>

      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Autocomplete options={options} onChange={setValue} label="Fruit" />`}>
          <div style={{ width: '100%', maxWidth: 280 }}>
            <Autocomplete
              options={[{ value: '1', label: 'Apple' }, { value: '2', label: 'Banana' }, { value: '3', label: 'Cherry' }]}
              onChange={setValue}
              label="Fruit"
            />
          </div>
        </PreviewBlock>
      </div>

      <PropsTable rows={[
        { name: 'options', type: 'AutocompleteOption[]', description: 'Array of { value, label } objects.' },
        { name: 'value', type: 'string', description: 'Controlled input text.' },
        { name: 'onChange', type: '(value: string) => void', description: 'Called with the selected option value.' },
        { name: 'placeholder', type: 'string', default: "'Search…'", description: 'Input placeholder.' },
        { name: 'label', type: 'string', description: 'Field label.' },
        { name: 'noOptionsText', type: 'string', default: "'No options'", description: 'Shown when the filtered list is empty.' },
        { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Stretches to 100% width.' },
      ]} />
    </CompPageLayout>
  );
}
