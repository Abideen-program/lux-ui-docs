import { IconButton } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function IconButtonPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">IconButton</h1>
      <p className="section-sub">A compact, icon-only button. Requires an accessible label since there's no visible text.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Variants &amp; tones</h3>
      <PreviewBlock code={`<IconButton icon="🔍" variant="ghost" aria-label="Search" />
<IconButton icon="❤️" variant="soft" tone="danger" aria-label="Like" />
<IconButton icon="⚙️" variant="solid" tone="primary" aria-label="Settings" />`}>
        <IconButton icon="🔍" variant="ghost" aria-label="Search" />
        <IconButton icon="❤️" variant="soft" tone="danger" aria-label="Like" />
        <IconButton icon="⚙️" variant="solid" tone="primary" aria-label="Settings" />
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'icon', type: 'ReactNode', description: 'The icon to display.' },
        { name: 'aria-label', type: 'string', description: 'Required accessible label.' },
        { name: 'variant', type: 'LuxVariant', default: "'ghost'", description: 'Visual style.' },
        { name: 'tone', type: 'LuxTone', default: "'neutral'", description: 'Color tone.' },
        { name: 'size', type: 'LuxSize', default: "'md'", description: 'Button dimensions.' },
        { name: 'ripple', type: 'boolean', default: 'true', description: 'Click ripple effect.' },
      ]} />
    </section>
  );
}
