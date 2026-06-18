import { Popover, Button } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function PopoverPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Popover</h1>
      <p className="section-sub">Floating content anchored to a trigger element, positioned automatically.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<Popover trigger={<Button variant="outline">Click me</Button>}>
  <div style={{ padding: '0.5rem' }}>Popover content</div>
</Popover>`}>
        <Popover trigger={<Button variant="outline">Click me</Button>}>
          <div style={{ padding: '0.5rem', fontSize: '0.85rem' }}>Popover content</div>
        </Popover>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'trigger', type: 'ReactNode', description: 'Element the popover anchors to.' },
        { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", default: "'bottom'", description: 'Position relative to trigger.' },
        { name: 'triggerOn', type: "'click' | 'hover'", default: "'click'", description: 'How the popover opens.' },
        { name: 'open', type: 'boolean', description: 'Controlled open state.' },
        { name: 'onOpenChange', type: '(open: boolean) => void', description: 'Open state change handler.' },
      ]} />
    </section>
  );
}
