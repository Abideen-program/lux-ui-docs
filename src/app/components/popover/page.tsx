import { Popover, Button } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Popover" description="Floating content anchored to a trigger element, positioned automatically.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Popover trigger={<Button variant="outline">Click me</Button>}>\n  <div>Popover content</div>\n</Popover>`}>
          <Popover trigger={<Button variant="outline">Click me</Button>}>
            <div style={{ padding: '0.5rem', fontSize: '0.85rem' }}>Popover content</div>
          </Popover>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'trigger', type: 'ReactNode', description: 'Element the popover anchors to.' },
        { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", default: "'bottom'", description: 'Position relative to trigger.' },
        { name: 'triggerOn', type: "'click' | 'hover'", default: "'click'", description: 'How the popover opens.' },
        { name: 'open', type: 'boolean', description: 'Controlled open state.' },
        { name: 'onOpenChange', type: '(open: boolean) => void', description: 'Open state change handler.' },
      ]} />
    </CompPageLayout>
  );
}
