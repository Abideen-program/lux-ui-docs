import { Switch } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function SwitchPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Switch</h1>
      <p className="section-sub">A toggle switch for on/off settings.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<Switch label="Notifications" checked />
<Switch label="Dark mode" />`}>
        <Switch label="Notifications" checked />
        <Switch label="Dark mode" />
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'label', type: 'string', description: 'Label text.' },
        { name: 'hint', type: 'string', description: 'Helper text.' },
        { name: 'checked', type: 'boolean', description: 'Whether the switch is on.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Switch dimensions.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Color when on.' },
      ]} />
    </section>
  );
}
