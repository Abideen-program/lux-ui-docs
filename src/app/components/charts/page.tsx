import { BarChart, LineChart, PieChart, DonutChart } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';
import SampleDataBlock from '@/components/SampleDataBlock';

const data = [
  { label: 'Jan', value: 30 },
  { label: 'Feb', value: 58 },
  { label: 'Mar', value: 42 },
  { label: 'Apr', value: 71 },
  { label: 'May', value: 49 },
];

export default function Page() {
  return (
    <CompPageLayout name="Charts" description="Lightweight SVG-based charts — BarChart, LineChart, AreaChart, PieChart, and DonutChart. No external charting library.">
      <div className="comp-section">
        <SectionLabel>Data shape</SectionLabel>
        <p style={{ fontSize: '0.85rem', color: 'var(--fg-2)', marginBottom: '1rem' }}>
          Every chart type accepts the same <code style={{ color: 'var(--cyan)' }}>ChartDataPoint[]</code> shape — a flat array of label/value pairs. Use this same array across BarChart, LineChart, PieChart, or DonutChart interchangeably.
        </p>
        <SampleDataBlock title="ChartDataPoint[]" code={`interface ChartDataPoint {\n  label: string;\n  value: number;\n  tone?: LuxTone;  // optional per-point color override\n}\n\nconst data: ChartDataPoint[] = [\n  { label: 'Jan', value: 30 },\n  { label: 'Feb', value: 58 },\n  { label: 'Mar', value: 42 },\n  { label: 'Apr', value: 71 },\n  { label: 'May', value: 49 },\n];`} />
      </div>

      <div className="comp-section">
        <SectionLabel>BarChart</SectionLabel>
        <PreviewBlock code={`<BarChart data={data} />`}>
          <div style={{ width: '100%', maxWidth: 380 }}><BarChart data={data} /></div>
        </PreviewBlock>
      </div>

      <div className="comp-section">
        <SectionLabel>LineChart / AreaChart</SectionLabel>
        <PreviewBlock code={`<LineChart data={data} showArea />`}>
          <div style={{ width: '100%', maxWidth: 420 }}><LineChart data={data} showArea /></div>
        </PreviewBlock>
      </div>

      <div className="comp-section">
        <SectionLabel>PieChart / DonutChart</SectionLabel>
        <PreviewBlock code={`<PieChart data={data} />\n<DonutChart data={data} />`}>
          <PieChart data={data.slice(0, 4)} size={150} />
          <DonutChart data={data.slice(0, 4)} size={150} />
        </PreviewBlock>
      </div>

      <PropsTable rows={[
        { name: 'data', type: 'ChartDataPoint[]', description: 'Array of { label, value, tone? }.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: '(Bar/Line) Single-series color.' },
        { name: 'showValues', type: 'boolean', default: 'true', description: '(BarChart) Show numeric labels.' },
        { name: 'horizontal', type: 'boolean', default: 'false', description: '(BarChart) Horizontal bar orientation.' },
        { name: 'showArea', type: 'boolean', default: 'false', description: '(LineChart) Fill area under the line.' },
        { name: 'showDots', type: 'boolean', default: 'true', description: '(LineChart) Show point markers.' },
        { name: 'innerRadiusRatio', type: 'number', default: '0', description: '(PieChart) 0 = pie, >0 = donut hole ratio.' },
        { name: 'showLegend', type: 'boolean', default: 'true', description: '(PieChart) Show color legend.' },
      ]} />
    </CompPageLayout>
  );
}
