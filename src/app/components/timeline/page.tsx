import { Timeline } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Timeline" description="A vertical timeline for showing chronological events.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Timeline items={[\n  { title: 'Order placed', time: '10:00 AM', tone: 'success' },\n  { title: 'Shipped', time: '2:00 PM' },\n]} />`}>
          <div style={{ width: '100%', maxWidth: 320 }}>
            <Timeline items={[
              { title: 'Order placed', time: '10:00 AM', tone: 'success' },
              { title: 'Shipped', time: '2:00 PM' },
              { title: 'Out for delivery', time: '9:00 AM' },
            ]} />
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'items', type: 'TimelineItemData[]', description: 'Array of { title, description?, time?, icon?, tone? }.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Default tone for items without their own.' },
      ]} />
    </CompPageLayout>
  );
}
