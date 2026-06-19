import { Typewriter } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Typewriter" description="Animated typing effect that cycles through multiple strings.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Typewriter text={['Build fast', 'Ship beautiful UI', 'Use lux-ui']} speed={50} loop cursor />`}>
          <Typewriter text={['Build fast', 'Ship beautiful UI', 'Use lux-ui']} speed={50} loop cursor />
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'text', type: 'string | string[]', description: 'Text(s) to type — array cycles through each.' },
        { name: 'speed', type: 'number', default: '60', description: 'Typing speed in ms per character.' },
        { name: 'deleteSpeed', type: 'number', default: '30', description: 'Deleting speed in ms per character.' },
        { name: 'pauseDuration', type: 'number', default: '1500', description: 'Pause before deleting, in ms.' },
        { name: 'loop', type: 'boolean', default: 'true', description: 'Loop through the text array.' },
        { name: 'cursor', type: 'boolean', default: 'true', description: 'Show a blinking cursor.' },
      ]} />
    </CompPageLayout>
  );
}
