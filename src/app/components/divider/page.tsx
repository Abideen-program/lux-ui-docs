import { Divider } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Divider" description="A horizontal or vertical rule, with optional centered label.">
      <div className="comp-section">
        <SectionLabel>With label</SectionLabel>
        <PreviewBlock code={`<Divider label="OR" />`}>
          <div style={{ width: '100%' }}><Divider label="OR" /></div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Direction of the line.' },
        { name: 'label', type: 'ReactNode', description: 'Centered label — splits the line in two.' },
        { name: 'variant', type: "'solid' | 'dashed' | 'dotted'", default: "'solid'", description: 'Line style.' },
        { name: 'thickness', type: 'number', default: '1', description: 'Line thickness in px.' },
      ]} />
    </CompPageLayout>
  );
}
