import { Tooltip, IconButton } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Tooltip" description="A short hover hint attached to any element.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Tooltip content="Delete item">\n  <IconButton icon="🗑" aria-label="Delete" />\n</Tooltip>`}>
          <Tooltip content="Delete item">
            <IconButton icon="🗑" aria-label="Delete" />
          </Tooltip>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'content', type: 'ReactNode', description: 'Tooltip text content.' },
        { name: 'children', type: 'ReactNode', description: 'The trigger element.' },
        { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip position.' },
        { name: 'delay', type: 'number', default: '150', description: 'Delay before showing, in ms.' },
      ]} />
    </CompPageLayout>
  );
}
