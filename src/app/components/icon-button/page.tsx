import { IconButton } from 'lux-ui';
import PreviewBlock from '@/components/atoms/PreviewBlock';
import PropsTable from '@/components/atoms/PropsTable';
import CompPageLayout from '@/components/atoms/CompPageLayout';
import SectionLabel from '@/components/atoms/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="IconButton" description="A compact, icon-only button. Requires an accessible label since there's no visible text.">
      <div className="comp-section">
        <SectionLabel>Variants & tones</SectionLabel>
        <PreviewBlock code={`<IconButton icon="🔍" variant="ghost" aria-label="Search" />\n<IconButton icon="❤️" variant="soft" tone="danger" aria-label="Like" />\n<IconButton icon="⚙️" variant="solid" tone="primary" aria-label="Settings" />`}>
          <IconButton icon="🔍" variant="ghost" aria-label="Search" />
          <IconButton icon="❤️" variant="soft" tone="danger" aria-label="Like" />
          <IconButton icon="⚙️" variant="solid" tone="primary" aria-label="Settings" />
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'icon', type: 'ReactNode', description: 'The icon to display.' },
        { name: 'aria-label', type: 'string', description: 'Required accessible label.' },
        { name: 'variant', type: 'LuxVariant', default: "'ghost'", description: 'Visual style.' },
        { name: 'tone', type: 'LuxTone', default: "'neutral'", description: 'Color tone.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Button dimensions.' },
        { name: 'ripple', type: 'boolean', default: 'true', description: 'Click ripple effect.' },
      ]} />
    </CompPageLayout>
  );
}
