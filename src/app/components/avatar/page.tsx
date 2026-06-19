import { Avatar, AvatarGroup } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
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
            <Avatar initials="A" /><Avatar initials="B" /><Avatar initials="C" /><Avatar initials="D" /><Avatar initials="E" />
          </AvatarGroup>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'src', type: 'string', description: 'Image URL.' },
        { name: 'initials', type: 'string', description: 'Fallback initials when no image.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Avatar dimensions.' },
        { name: 'status', type: "'online' | 'offline' | 'away' | 'busy'", description: 'Status indicator dot.' },
        { name: 'tone', type: 'LuxTone', description: 'Background tone (used when no src/color).' },
      ]} />
    </CompPageLayout>
  );
}
