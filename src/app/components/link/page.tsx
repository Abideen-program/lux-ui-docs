import { Link } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Link" description="A styled anchor element with tone, underline behavior, and an external-link indicator.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Link href="/docs">Internal link</Link>\n<Link href="https://github.com" external>External link</Link>`}>
          <Link href="/docs">Internal link</Link>
          <Link href="https://github.com" external>External link</Link>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Text color.' },
        { name: 'underline', type: "'always' | 'hover' | 'none'", default: "'hover'", description: 'Underline behavior.' },
        { name: 'external', type: 'boolean', default: 'false', description: 'Opens in a new tab and shows an icon.' },
      ]} />
    </CompPageLayout>
  );
}
