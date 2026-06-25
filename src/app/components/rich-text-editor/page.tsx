'use client';
import { useState } from 'react';
import { RichTextEditor } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  const [html, setHtml] = useState('<p>Start writing your <strong>story</strong>...</p>');

  return (
    <CompPageLayout name="RichTextEditor" description="A contentEditable-based WYSIWYG editor with a basic formatting toolbar.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<RichTextEditor value={html} onChange={setHtml} height={200} />`}>
          <div style={{ width: '100%' }}>
            <RichTextEditor value={html} onChange={setHtml} height={200} />
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'value', type: 'string', description: 'Initial HTML content.' },
        { name: 'onChange', type: '(html: string) => void', description: 'Called on every edit with the updated HTML.' },
        { name: 'placeholder', type: 'string', default: "'Start writing…'", description: 'Shown when empty.' },
        { name: 'readOnly', type: 'boolean', default: 'false', description: 'Hides the toolbar and disables editing.' },
        { name: 'height', type: 'number | string', default: '240', description: 'Editable area height.' },
      ]} />
    </CompPageLayout>
  );
}
