import { Switch } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Switch" description="A toggle switch for on/off settings.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Switch label="Notifications" checked />\n<Switch label="Dark mode" />`}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Switch label="Notifications" checked />
            <Switch label="Dark mode" />
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'label', type: 'string', description: 'Label text.' },
        { name: 'hint', type: 'string', description: 'Helper text.' },
        { name: 'checked', type: 'boolean', description: 'Whether the switch is on.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Switch dimensions.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Color when on.' },
      ]} />
    </CompPageLayout>
  );
}
