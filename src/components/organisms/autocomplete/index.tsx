'use client';
import { useState } from 'react';
import { Autocomplete } from 'lux-ui';
import PreviewBlock from '@/components/atoms/PreviewBlock';
import PropsTable from '@/components/atoms/PropsTable';
import CompPageLayout from '@/components/atoms/CompPageLayout';
import SectionLabel from '@/components/atoms/SectionLabel';
import SampleDataBlock from '@/components/atoms/SampleDataBlock';
import { AutoCompleteRows } from '@/constant/data';

const options = [{ value: '1', label: 'Apple' }, { value: '2', label: 'Banana' }, { value: '3', label: 'Cherry' }]

export default function AutoCompletePage() {
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
              options={options}
              onChange={setValue}
              label="Fruit"
            />
          </div>
        </PreviewBlock>
      </div>

      <PropsTable rows={AutoCompleteRows} />
    </CompPageLayout>
  );
}
