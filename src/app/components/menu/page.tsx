'use client';
import { Menu, Button } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';
import SampleDataBlock from '@/components/SampleDataBlock';

export default function Page() {
  return (
    <CompPageLayout name="Menu" description="A dropdown menu anchored to a trigger element.">
      <div className="comp-section">
        <SectionLabel>Data shape</SectionLabel>
        <SampleDataBlock title="MenuItemData[]" code={`interface MenuItemData {\n  label: ReactNode;\n  icon?: ReactNode;\n  onClick?: () => void;\n  disabled?: boolean;\n  danger?: boolean;   // styles the item red, for destructive actions\n  divider?: boolean;  // renders a separator line instead of an item\n}\n\nconst items: MenuItemData[] = [\n  { label: 'Edit', onClick: () => {} },\n  { label: 'Duplicate', onClick: () => {} },\n  { divider: true, label: '', onClick: () => {} },\n  { label: 'Delete', danger: true, onClick: () => {} },\n];`} />
      </div>

      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Menu trigger={<Button variant="outline">Options</Button>} items={items} />`}>
          <Menu trigger={<Button variant="outline">Options</Button>} items={[
            { label: 'Edit', onClick: () => {} },
            { label: 'Duplicate', onClick: () => {} },
            { divider: true, label: '', onClick: () => {} },
            { label: 'Delete', danger: true, onClick: () => {} },
          ]} />
        </PreviewBlock>
      </div>

      <PropsTable rows={[
        { name: 'trigger', type: 'ReactNode', description: 'Element that opens the menu on click.' },
        { name: 'items', type: 'MenuItemData[]', description: 'Array of { label, icon?, onClick?, disabled?, danger?, divider? }.' },
        { name: 'placement', type: "'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'", default: "'bottom-start'", description: 'Menu position relative to trigger.' },
      ]} />
    </CompPageLayout>
  );
}
