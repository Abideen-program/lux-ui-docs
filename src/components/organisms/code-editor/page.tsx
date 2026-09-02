'use client';
import { useState } from 'react';
import { CodeEditor } from 'lux-ui';
import PreviewBlock from '@/components/atoms/PreviewBlock';
import PropsTable from '@/components/atoms/PropsTable';
import CompPageLayout from '@/components/atoms/CompPageLayout';
import SectionLabel from '@/components/atoms/SectionLabel';
import { CodeEditorRows } from '@/constant/data';

export default function CodeEditorPage() {
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
      <PropsTable rows={CodeEditorRows} />
    </CompPageLayout>
  );
}
