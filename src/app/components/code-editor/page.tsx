'use client';
import { useState } from 'react';
import { CodeEditor } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  const [code, setCode] = useState(`function greet(name) {\n  return \`Hello, \${name}!\`;\n}`);

  return (
    <CompPageLayout name="CodeEditor" description="A lightweight code input with line numbers and tab-to-indent — no heavy editor dependency.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<CodeEditor value={code} onChange={setCode} language="javascript" height={200} />`}>
          <div style={{ width: '100%' }}>
            <CodeEditor value={code} onChange={setCode} language="javascript" height={200} />
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'value', type: 'string', description: 'Code content.' },
        { name: 'onChange', type: '(value: string) => void', description: 'Change handler.' },
        { name: 'language', type: 'string', default: "'text'", description: 'Label shown in the header bar.' },
        { name: 'readOnly', type: 'boolean', default: 'false', description: 'Disables editing.' },
        { name: 'height', type: 'number | string', default: '280', description: 'Editor height.' },
        { name: 'showLineNumbers', type: 'boolean', default: 'true', description: 'Shows the line number gutter.' },
        { name: 'fontSize', type: 'number', default: '13', description: 'Font size in px.' },
      ]} />
    </CompPageLayout>
  );
}
