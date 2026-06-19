import { Breadcrumbs } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Breadcrumbs" description="Shows the current page's location within a hierarchy.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Settings', href: '/settings' }, { label: 'Profile' }]} />`}>
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
