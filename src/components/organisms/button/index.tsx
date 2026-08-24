import { Button, LuxSize, LuxTone, LuxVariant } from 'lux-ui';
import PreviewBlock from '@/components/atoms/PreviewBlock';
import PropsTable from '@/components/atoms/PropsTable';
import CompPageLayout from '@/components/atoms/CompPageLayout';
import SectionLabel from '@/components/atoms/SectionLabel';
import { ButtonRows } from '@/constant/data';

const buttonVariants: { variant: LuxVariant, text: string }[] = [
  { variant: 'solid', text: 'Solid' },
  { variant: 'outline', text: 'Outline' },
  { variant: 'ghost', text: 'Ghost' },
  { variant: 'soft', text: 'Soft' },
]

const buttonTones: { tone: LuxTone, text: string }[] = [
  { tone: 'primary', text: 'Primary' },
  { tone: 'success', text: 'Success' },
  { tone: 'danger', text: 'Danger' },
  { tone: 'warning', text: 'Warning' },
]

const buttonSizes: { size: LuxSize, text: string }[] = [
  { size: 'xs', text: 'XS' },
  { size: 'sm', text: 'SM' },
  { size: 'md', text: 'MD' },
  { size: 'lg', text: 'LG' },
  { size: 'xl', text: 'XL' },
]

export default function ButtonPage() {
  return (
    <CompPageLayout
      name="Button"
      description="The fundamental interactive element. Supports variants, tones, sizes, loading state, ripple, and magnetic hover."
    >
      <div className="comp-section">
        <SectionLabel>Variants</SectionLabel>
        <PreviewBlock code={`<Button variant="solid">Solid</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="ghost">Ghost</Button>\n<Button variant="soft">Soft</Button>`}>
          {
            buttonVariants.map((buttonVariant, idx) => <Button key={idx} variant={buttonVariant.variant}>{buttonVariant.text}</Button>)
          }
        </PreviewBlock>
      </div>

      <div className="comp-section">
        <SectionLabel>Tones</SectionLabel>
        <PreviewBlock code={`<Button tone="primary">Primary</Button>\n<Button tone="success">Success</Button>\n<Button tone="danger">Danger</Button>\n<Button tone="warning">Warning</Button>`}>
          {
            buttonTones.map((buttonTone, idx) => <Button key={idx} tone={buttonTone.tone}>{buttonTone.text}</Button>)
          }
        </PreviewBlock>
      </div>

      <div className="comp-section">
        <SectionLabel>Sizes</SectionLabel>
        <PreviewBlock code={`<Button size="xs">XS</Button>\n<Button size="sm">SM</Button>\n<Button size="md">MD</Button>\n<Button size="lg">LG</Button>\n<Button size="xl">XL</Button>`}>
          {
            buttonSizes.map((buttonSize, idx) => <Button key={idx} size={buttonSize.size}>{buttonSize.text}</Button>)
          }
        </PreviewBlock>
      </div>

      <div className="comp-section">
        <SectionLabel>Loading & Magnetic</SectionLabel>
        <PreviewBlock code={`<Button loading>Saving...</Button>\n<Button magnetic tone="accent">Hover me</Button>`}>
          <Button loading>Saving...</Button>
          <Button magnetic tone="accent">Hover me</Button>
        </PreviewBlock>
      </div>

      <PropsTable rows={ButtonRows} />
    </CompPageLayout>
  );
}
