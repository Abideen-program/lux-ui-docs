import { Tabs, TabList, Tab, TabPanel } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function TabsPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Tabs</h1>
      <p className="section-sub">Tabbed navigation with line, pill, and enclosed visual variants.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Pill variant</h3>
      <PreviewBlock code={`<Tabs defaultValue="overview" variant="pill">
  <TabList>
    <Tab value="overview">Overview</Tab>
    <Tab value="settings">Settings</Tab>
  </TabList>
  <TabPanel value="overview">Overview content</TabPanel>
  <TabPanel value="settings">Settings content</TabPanel>
</Tabs>`}>
        <div style={{ width: '100%' }}>
          <Tabs defaultValue="overview" variant="pill">
            <TabList>
              <Tab value="overview">Overview</Tab>
              <Tab value="settings">Settings</Tab>
            </TabList>
            <div style={{ paddingTop: '1rem', fontSize: '0.85rem', opacity: 0.7 }}>
              <TabPanel value="overview">Overview content</TabPanel>
              <TabPanel value="settings">Settings content</TabPanel>
            </div>
          </Tabs>
        </div>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'defaultValue', type: 'string', description: 'Initial active tab (uncontrolled).' },
        { name: 'value', type: 'string', description: 'Active tab (controlled).' },
        { name: 'onChange', type: '(value: string) => void', description: 'Change handler.' },
        { name: 'variant', type: "'line' | 'pill' | 'enclosed'", default: "'line'", description: 'Visual style.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Active tab color.' },
      ]} />
    </section>
  );
}
