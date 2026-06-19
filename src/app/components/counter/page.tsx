import { Counter } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Counter" description="Animated number count-up, with prefix/suffix and a thousands separator.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Counter value={12450} prefix="$" suffix="+" duration={2000} triggerOnView={false} />`}>
          <div style={{ fontSize: '2rem', fontWeight: 800 }}>
            <Counter value={12450} prefix="$" suffix="+" duration={2000} triggerOnView={false} />
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'value', type: 'number', description: 'Target value to count to.' },
        { name: 'duration', type: 'number', default: '1500', description: 'Animation duration in ms.' },
        { name: 'decimals', type: 'number', default: '0', description: 'Decimal places.' },
        { name: 'prefix', type: 'string', description: 'Prefix text (e.g. "$").' },
        { name: 'suffix', type: 'string', description: 'Suffix text (e.g. "%", "+").' },
        { name: 'triggerOnView', type: 'boolean', default: 'true', description: 'Starts animation when scrolled into view.' },
      ]} />
    </CompPageLayout>
  );
}
