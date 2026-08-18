import { Avatar, AvatarGroup } from 'lux-ui';
import PreviewBlock from '@/components/atoms/PreviewBlock';
import PropsTable from '@/components/atoms/PropsTable';
import CompPageLayout from '@/components/atoms/CompPageLayout';
import SectionLabel from '@/components/atoms/SectionLabel';
import { AvatarRows } from '@/constant/data';

const avatarInitials = ['A', 'B', 'C', 'D', 'E']

export default function AvatarPage() {
  return (
    <CompPageLayout name="Avatar" description="User avatars with initials, status indicators, and grouping.">
      <div className="comp-section">
        <SectionLabel>Basic & status</SectionLabel>
        <PreviewBlock code={`<Avatar initials="AB" />\n<Avatar initials="CD" status="online" />\n<Avatar initials="EF" status="busy" />`}>
          <Avatar initials="AB" />
          <Avatar initials="CD" status="online" />
          <Avatar initials="EF" status="busy" />
        </PreviewBlock>
      </div>
      <div className="comp-section">
        <SectionLabel>AvatarGroup</SectionLabel>
        <PreviewBlock code={`<AvatarGroup max={3}>\n  <Avatar initials="A" /><Avatar initials="B" /><Avatar initials="C" />\n  <Avatar initials="D" /><Avatar initials="E" />\n</AvatarGroup>`}>
          <AvatarGroup max={3}>
            {
              avatarInitials.map((initial, idx) => <Avatar key={idx} initials={initial} />)
            }
          </AvatarGroup>
        </PreviewBlock>
      </div>
      <PropsTable rows={AvatarRows} />
    </CompPageLayout>
  );
}
