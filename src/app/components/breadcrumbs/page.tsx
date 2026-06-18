import { Breadcrumbs } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function BreadcrumbsPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Breadcrumbs</h1>
      <p className="section-sub">Shows the current page's location within a hierarchy.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<Breadcrumbs items={[
  { label: 'Home', href: '/' },
  { label: 'Settings', href: '/settings' },
  { label: 'Profile' },
]} />`}>
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Settings', href: '/settings' },
          { label: 'Profile' },
        ]} />
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'items', type: 'BreadcrumbItem[]', description: 'Array of { label, href?, icon?, onClick? }.' },
        { name: 'separator', type: 'ReactNode', default: "'/'", description: 'Separator between items.' },
        { name: 'maxItems', type: 'number', description: 'Collapses middle items with an ellipsis.' },
      ]} />
    </section>
  );
}
