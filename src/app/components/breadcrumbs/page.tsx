import { Breadcrumbs } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';
import SampleDataBlock from '@/components/SampleDataBlock';

export default function Page() {
  return (
    <CompPageLayout name="Breadcrumbs" description="Shows the current page's location within a hierarchy.">
      <div className="comp-section">
        <SectionLabel>Data shape</SectionLabel>
        <SampleDataBlock title="BreadcrumbItem[]" code={`interface BreadcrumbItem {\n  label: string;\n  href?: string;     // omit for the current (non-clickable) page\n  icon?: ReactNode;\n  onClick?: () => void;\n}\n\nconst items: BreadcrumbItem[] = [\n  { label: 'Home', href: '/' },\n  { label: 'Settings', href: '/settings' },\n  { label: 'Profile' },  // current page — no href\n];`} />
      </div>

      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Breadcrumbs items={items} />`}>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Settings', href: '/settings' }, { label: 'Profile' }]} />
        </PreviewBlock>
      </div>

      <PropsTable rows={[
        { name: 'items', type: 'BreadcrumbItem[]', description: 'Array of { label, href?, icon?, onClick? }.' },
        { name: 'separator', type: 'ReactNode', default: "'/'", description: 'Separator between items.' },
        { name: 'maxItems', type: 'number', description: 'Collapses middle items with an ellipsis.' },
      ]} />
    </CompPageLayout>
  );
}
