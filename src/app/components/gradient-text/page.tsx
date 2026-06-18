import { GradientText } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function GradientTextPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">GradientText</h1>
      <p className="section-sub">Text with a gradient fill — 8 presets, or a custom CSS gradient.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Presets</h3>
      <PreviewBlock code={`<GradientText gradient="electric" as="h2">Electric</GradientText>
<GradientText gradient="sunset" as="h2">Sunset</GradientText>
<GradientText gradient="aurora" as="h2">Aurora</GradientText>`}>
        <GradientText gradient="electric" as="h2">Electric</GradientText>
        <GradientText gradient="sunset" as="h2">Sunset</GradientText>
        <GradientText gradient="aurora" as="h2">Aurora</GradientText>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'gradient', type: "'electric' | 'sunset' | 'ocean' | 'fire' | 'aurora' | 'neon' | 'gold' | 'candy'", default: "'electric'", description: 'Preset gradient.' },
        { name: 'customGradient', type: 'string', description: 'Custom CSS gradient string — overrides preset.' },
        { name: 'as', type: 'ElementType', default: "'span'", description: 'Render as a different element.' },
        { name: 'animated', type: 'boolean', default: 'false', description: 'Animates the gradient.' },
        { name: 'weight', type: "'regular' | 'medium' | 'semibold' | 'bold' | 'black'", default: "'bold'", description: 'Font weight.' },
      ]} />
    </section>
  );
}
