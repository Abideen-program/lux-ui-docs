import { Avatar, AvatarGroup } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function AvatarPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Avatar</h1>
      <p className="section-sub">User avatars with initials, status indicators, and grouping.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic &amp; status</h3>
      <PreviewBlock code={`<Avatar initials="AB" />
<Avatar initials="CD" status="online" />
<Avatar initials="EF" status="busy" />`}>
        <Avatar initials="AB" />
        <Avatar initials="CD" status="online" />
        <Avatar initials="EF" status="busy" />
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>AvatarGroup</h3>
      <PreviewBlock code={`<AvatarGroup max={3}>
  <Avatar initials="A" />
  <Avatar initials="B" />
  <Avatar initials="C" />
  <Avatar initials="D" />
  <Avatar initials="E" />
</AvatarGroup>`}>
        <AvatarGroup max={3}>
          <Avatar initials="A" />
          <Avatar initials="B" />
          <Avatar initials="C" />
          <Avatar initials="D" />
          <Avatar initials="E" />
        </AvatarGroup>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'src', type: 'string', description: 'Image URL.' },
        { name: 'initials', type: 'string', description: 'Fallback initials when no image.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Avatar dimensions.' },
        { name: 'status', type: "'online' | 'offline' | 'away' | 'busy'", description: 'Status indicator dot.' },
        { name: 'tone', type: 'LuxTone', description: 'Background tone (used when no src/color).' },
      ]} />
    </section>
  );
}
