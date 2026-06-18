import { Timeline } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function TimelinePage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Timeline</h1>
      <p className="section-sub">A vertical timeline for showing chronological events.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<Timeline items={[
  { title: 'Order placed', time: '10:00 AM', tone: 'success' },
  { title: 'Shipped', time: '2:00 PM' },
  { title: 'Out for delivery', time: '9:00 AM' },
]} />`}>
        <div style={{ width: '100%', maxWidth: 320 }}>
          <Timeline items={[
            { title: 'Order placed', time: '10:00 AM', tone: 'success' },
            { title: 'Shipped', time: '2:00 PM' },
            { title: 'Out for delivery', time: '9:00 AM' },
          ]} />
        </div>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'items', type: 'TimelineItemData[]', description: 'Array of { title, description?, time?, icon?, tone? }.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Default tone for items without their own.' },
      ]} />
    </section>
  );
}
