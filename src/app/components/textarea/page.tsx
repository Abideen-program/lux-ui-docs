import { Textarea } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Textarea" description="A multi-line text input, styled to match TextField.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Textarea label="Message" placeholder="Write something…" />`}>
          <div style={{ width: '100%', maxWidth: 320 }}>
            <Textarea label="Message" placeholder="Write something…" />
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'label', type: 'string', description: 'Field label.' },
        { name: 'hint', type: 'string', description: 'Helper text.' },
        { name: 'error', type: 'string', description: 'Error message.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Field size.' },
        { name: 'resize', type: "'none' | 'vertical' | 'horizontal' | 'both'", default: "'vertical'", description: 'Resize behavior.' },
        { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Stretches to 100% width.' },
      ]} />
    </CompPageLayout>
  );
}
