import { GradientText } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="GradientText" description="Text with a gradient fill — 8 presets, or a custom CSS gradient.">
      <div className="comp-section">
        <SectionLabel>Presets</SectionLabel>
        <PreviewBlock code={`<GradientText gradient="electric" as="h2">Electric</GradientText>\n<GradientText gradient="sunset" as="h2">Sunset</GradientText>\n<GradientText gradient="aurora" as="h2">Aurora</GradientText>`}>
          <GradientText gradient="electric" as="h2">Electric</GradientText>
          <GradientText gradient="sunset" as="h2">Sunset</GradientText>
          <GradientText gradient="aurora" as="h2">Aurora</GradientText>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'gradient', type: "'electric' | 'sunset' | 'ocean' | 'fire' | 'aurora' | 'neon' | 'gold' | 'candy'", default: "'electric'", description: 'Preset gradient.' },
        { name: 'customGradient', type: 'string', description: 'Custom CSS gradient string — overrides preset.' },
        { name: 'as', type: 'ElementType', default: "'span'", description: 'Render as a different element.' },
        { name: 'animated', type: 'boolean', default: 'false', description: 'Animates the gradient.' },
        { name: 'weight', type: "'regular'-'black'", default: "'bold'", description: 'Font weight.' },
      ]} />
    </CompPageLayout>
  );
}
