import { Tooltip, IconButton } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function TooltipPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Tooltip</h1>
      <p className="section-sub">A short hover hint attached to any element.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<Tooltip content="Delete item">
  <IconButton icon="🗑" aria-label="Delete" />
</Tooltip>`}>
        <Tooltip content="Delete item">
          <IconButton icon="🗑" aria-label="Delete" />
        </Tooltip>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'content', type: 'ReactNode', description: 'Tooltip text content.' },
        { name: 'children', type: 'ReactNode', description: 'The trigger element.' },
        { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Tooltip position.' },
        { name: 'delay', type: 'number', default: '150', description: 'Delay before showing, in ms.' },
      ]} />
    </section>
  );
}
