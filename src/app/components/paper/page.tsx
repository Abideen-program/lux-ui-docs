import { Paper } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Paper" description="A simple elevated or outlined surface — a building block for other components.">
      <div className="comp-section">
        <SectionLabel>Variants</SectionLabel>
        <PreviewBlock code={`<Paper elevation="mid">Elevation</Paper>\n<Paper variant="outline">Outline</Paper>`}>
          <Paper elevation="mid">Elevation</Paper>
          <Paper variant="outline">Outline</Paper>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'variant', type: "'elevation' | 'outline'", default: "'elevation'", description: 'Visual style.' },
        { name: 'elevation', type: "'none' | 'xs' | 'low' | 'mid' | 'high' | 'float'", default: "'low'", description: 'Shadow depth (when variant is elevation).' },
        { name: 'radius', type: 'LuxRadius', default: "'lg'", description: 'Border radius.' },
        { name: 'padding', type: 'number | string', default: "'1.25rem'", description: 'Internal padding.' },
      ]} />
    </CompPageLayout>
  );
}
