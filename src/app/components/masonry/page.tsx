import { Masonry } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

const heights = [60, 100, 75, 90, 50, 110];
const box = { background: 'rgba(255,255,255,0.06)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.78rem' };

export default function Page() {
  return (
    <CompPageLayout name="Masonry" description="A Pinterest-style multi-column layout for variable-height content.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Masonry cols={3} gap={12}>\n  <div style={{ height: 60 }}>1</div>\n  <div style={{ height: 100 }}>2</div>\n  ...\n</Masonry>`}>
          <div style={{ width: '100%' }}>
            <Masonry cols={3} gap={12}>
              {heights.map((h, i) => <div key={i} style={{ ...box, height: h }}>{i + 1}</div>)}
            </Masonry>
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'cols', type: 'number', default: '3', description: 'Number of columns.' },
        { name: 'gap', type: 'number', default: '16', description: 'Gap between items in px.' },
      ]} />
    </CompPageLayout>
  );
}
