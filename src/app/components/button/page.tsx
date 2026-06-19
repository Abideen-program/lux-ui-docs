import { Button } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function ButtonPage() {
  return (
    <CompPageLayout
      name="Button"
      description="The fundamental interactive element. Supports variants, tones, sizes, loading state, ripple, and magnetic hover."
    >
      <div className="comp-section">
        <SectionLabel>Variants</SectionLabel>
        <PreviewBlock code={`<Button variant="solid">Solid</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="ghost">Ghost</Button>\n<Button variant="soft">Soft</Button>`}>
          <Button variant="solid">Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="soft">Soft</Button>
        </PreviewBlock>
      </div>

      <div className="comp-section">
        <SectionLabel>Tones</SectionLabel>
        <PreviewBlock code={`<Button tone="primary">Primary</Button>\n<Button tone="success">Success</Button>\n<Button tone="danger">Danger</Button>\n<Button tone="warning">Warning</Button>`}>
          <Button tone="primary">Primary</Button>
          <Button tone="success">Success</Button>
          <Button tone="danger">Danger</Button>
          <Button tone="warning">Warning</Button>
        </PreviewBlock>
      </div>

      <div className="comp-section">
        <SectionLabel>Sizes</SectionLabel>
        <PreviewBlock code={`<Button size="xs">XS</Button>\n<Button size="sm">SM</Button>\n<Button size="md">MD</Button>\n<Button size="lg">LG</Button>\n<Button size="xl">XL</Button>`}>
          <Button size="xs">XS</Button>
          <Button size="sm">SM</Button>
          <Button size="md">MD</Button>
          <Button size="lg">LG</Button>
          <Button size="xl">XL</Button>
        </PreviewBlock>
      </div>

      <div className="comp-section">
        <SectionLabel>Loading & Magnetic</SectionLabel>
        <PreviewBlock code={`<Button loading>Saving...</Button>\n<Button magnetic tone="accent">Hover me</Button>`}>
          <Button loading>Saving...</Button>
          <Button magnetic tone="accent">Hover me</Button>
        </PreviewBlock>
      </div>

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
        { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Stretches to 100% width.' },
      ]} />
    </CompPageLayout>
  );
}
