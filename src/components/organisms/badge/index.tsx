import { Badge, type LuxTone } from 'lux-ui';
import PreviewBlock from '@/components/atoms/PreviewBlock';
import PropsTable from '@/components/atoms/PropsTable';
import CompPageLayout from '@/components/atoms/CompPageLayout';
import SectionLabel from '@/components/atoms/SectionLabel';
import { BadgeRows } from '@/constant/data';

const badgeData: { tone: LuxTone; title: string }[] = [
  { tone: 'primary', title: 'New' },
  { tone: 'success', title: 'Active' },
  { tone: 'danger', title: 'Failed' },
  { tone: 'warning', title: 'Pending' },
]

export default function BadgePage() {
  return (
    <CompPageLayout name="Badge" description="Small status or count indicators.">
      <div className="comp-section">
        <SectionLabel>Tones</SectionLabel>
        <PreviewBlock code={`<Badge tone="primary">New</Badge>\n<Badge tone="success">Active</Badge>\n<Badge tone="danger">Failed</Badge>\n<Badge tone="warning">Pending</Badge>`}>
          {
            badgeData.map((badge, idx) => <Badge key={idx} tone={badge.tone}>{badge.title}</Badge>)
          }
        </PreviewBlock>
      </div>
      <PropsTable rows={BadgeRows} />
    </CompPageLayout>
  );
}
