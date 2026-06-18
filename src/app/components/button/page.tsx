import { Button } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function ButtonPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Button</h1>
      <p className="section-sub">The fundamental interactive element. Supports variants, tones, sizes, loading state, ripple, and magnetic hover.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Variants</h3>
      <PreviewBlock code={`<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="soft">Soft</Button>`}>
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="soft">Soft</Button>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Tones</h3>
      <PreviewBlock code={`<Button tone="primary">Primary</Button>
<Button tone="success">Success</Button>
<Button tone="danger">Danger</Button>
<Button tone="warning">Warning</Button>`}>
        <Button tone="primary">Primary</Button>
        <Button tone="success">Success</Button>
        <Button tone="danger">Danger</Button>
        <Button tone="warning">Warning</Button>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Sizes</h3>
      <PreviewBlock code={`<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>`}>
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Loading &amp; Magnetic</h3>
      <PreviewBlock code={`<Button loading>Saving...</Button>
<Button magnetic tone="accent">Hover me</Button>`}>
        <Button loading>Saving...</Button>
        <Button magnetic tone="accent">Hover me</Button>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'variant', type: "'solid' | 'outline' | 'ghost' | 'soft'", default: "'solid'", description: 'Visual style of the button.' },
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Color tone.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Size of the button.' },
        { name: 'radius', type: 'LuxRadius', default: "'full'", description: 'Border radius.' },
        { name: 'loading', type: 'boolean', default: 'false', description: 'Shows a spinner and disables the button.' },
        { name: 'ripple', type: 'boolean', default: 'true', description: 'Click ripple effect.' },
        { name: 'magnetic', type: 'boolean', default: 'false', description: 'Cursor-following hover effect.' },
        { name: 'leftIcon', type: 'ReactNode', description: 'Icon before the label.' },
        { name: 'rightIcon', type: 'ReactNode', description: 'Icon after the label.' },
        { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Stretches the button to 100% width.' },
      ]} />
    </section>
  );
}
