import { ButtonGroup, Button } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="ButtonGroup" description="Connects buttons with a shared border, for segmented controls.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<ButtonGroup>\n  <Button>One</Button>\n  <Button>Two</Button>\n  <Button>Three</Button>\n</ButtonGroup>`}>
          <ButtonGroup>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Layout direction.' },
        { name: 'variant', type: 'LuxVariant', description: 'Applies to all child Buttons unless overridden.' },
        { name: 'tone', type: 'LuxTone', description: 'Applies to all child Buttons unless overridden.' },
      ]} />
    </CompPageLayout>
  );
}
