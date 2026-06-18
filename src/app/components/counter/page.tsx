import { Counter } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function CounterPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Counter</h1>
      <p className="section-sub">Animated number count-up, with prefix/suffix and a thousands separator.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<Counter value={12450} prefix="$" suffix="+" duration={2000} triggerOnView={false} />`}>
        <div style={{ fontSize: '2rem', fontWeight: 800 }}>
          <Counter value={12450} prefix="$" suffix="+" duration={2000} triggerOnView={false} />
        </div>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'value', type: 'number', description: 'Target value to count to.' },
        { name: 'duration', type: 'number', default: '1500', description: 'Animation duration in ms.' },
        { name: 'decimals', type: 'number', default: '0', description: 'Decimal places.' },
        { name: 'prefix', type: 'string', description: 'Prefix text (e.g. "$").' },
        { name: 'suffix', type: 'string', description: 'Suffix text (e.g. "%", "+").' },
        { name: 'triggerOnView', type: 'boolean', default: 'true', description: 'Starts animation when scrolled into view.' },
      ]} />
    </section>
  );
}
