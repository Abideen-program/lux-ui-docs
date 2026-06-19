import { Tabs, TabList, Tab, TabPanel } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Tabs" description="Tabbed navigation with line, pill, and enclosed visual variants.">
      <div className="comp-section">
        <SectionLabel>Pill variant</SectionLabel>
        <PreviewBlock code={`<Tabs defaultValue="overview" variant="pill">\n  <TabList><Tab value="overview">Overview</Tab><Tab value="settings">Settings</Tab></TabList>\n  <TabPanel value="overview">Overview content</TabPanel>\n  <TabPanel value="settings">Settings content</TabPanel>\n</Tabs>`}>
          <div style={{ width: '100%' }}>
            <Tabs defaultValue="overview" variant="pill">
              <TabList><Tab value="overview">Overview</Tab><Tab value="settings">Settings</Tab></TabList>
              <div style={{ paddingTop: '1rem', fontSize: '0.85rem', opacity: 0.7 }}>
                <TabPanel value="overview">Overview content</TabPanel>
                <TabPanel value="settings">Settings content</TabPanel>
              </div>
            </Tabs>
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'defaultValue', type: 'string', description: 'Initial active tab (uncontrolled).' },
        { name: 'value', type: 'string', description: 'Active tab (controlled).' },
        { name: 'onChange', type: '(value: string) => void', description: 'Change handler.' },
        { name: 'variant', type: "'line' | 'pill' | 'enclosed'", default: "'line'", description: 'Visual style.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Active tab color.' },
      ]} />
    </CompPageLayout>
  );
}
