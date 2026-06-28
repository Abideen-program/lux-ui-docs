import { Grid } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

const box = { background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '1rem', textAlign: 'center' as const, fontSize: '0.8rem' };

export default function Page() {
  return (
    <CompPageLayout name="Grid" description="A responsive CSS grid with breakpoint-aware column counts.">
      <div className="comp-section">
        <SectionLabel>Responsive columns</SectionLabel>
        <PreviewBlock code={`<Grid cols={1} mdCols={3} gap={4}>\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n</Grid>`}>
          <div style={{ width: '100%' }}>
            <Grid cols={1} mdCols={3} gap={4}>
              <div style={box}>1</div>
              <div style={box}>2</div>
              <div style={box}>3</div>
            </Grid>
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'cols', type: 'number', default: '1', description: 'Default column count.' },
        { name: 'smCols / mdCols / lgCols', type: 'number', description: 'Column count at ≥640px / ≥768px / ≥1024px.' },
        { name: 'gap', type: 'number | string', default: '4', description: 'Gap between items.' },
        { name: 'rowGap / colGap', type: 'number | string', description: 'Override gap per axis.' },
      ]} />
    </CompPageLayout>
  );
}
