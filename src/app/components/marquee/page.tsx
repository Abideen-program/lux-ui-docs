import { Marquee, Chip } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Marquee" description="Infinite horizontal scrolling content — great for logo walls or ticker text.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Marquee speed={15}>\n  <Chip>React</Chip>\n  <Chip>Next.js</Chip>\n  <Chip>TypeScript</Chip>\n</Marquee>`}>
          <div style={{ width: '100%' }}>
            <Marquee speed={15}>
              <Chip>React</Chip>
              <Chip>Next.js</Chip>
              <Chip>TypeScript</Chip>
              <Chip>luxcss</Chip>
            </Marquee>
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'speed', type: 'number', default: '20', description: 'Seconds for one full loop.' },
        { name: 'direction', type: "'left' | 'right'", default: "'left'", description: 'Scroll direction.' },
        { name: 'pauseOnHover', type: 'boolean', default: 'true', description: 'Pauses animation on hover.' },
        { name: 'gap', type: 'number', default: '32', description: 'Gap between repeated content in px.' },
      ]} />
    </CompPageLayout>
  );
}
