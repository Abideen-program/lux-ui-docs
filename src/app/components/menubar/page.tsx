'use client';
import { Menubar } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';
import SampleDataBlock from '@/components/SampleDataBlock';

export default function Page() {
  return (
    <CompPageLayout name="Menubar" description="A desktop-style File/Edit menu bar with submenus — built on the same item shape as Menu.">
      <div className="comp-section">
        <SectionLabel>Data shape</SectionLabel>
        <SampleDataBlock title="MenubarMenu[]" code={`interface MenubarMenu {\n  label: string;\n  items: MenuItemData[];  // same shape as Menu's items prop\n}\n\nconst menus: MenubarMenu[] = [\n  { label: 'File', items: [\n    { label: 'New', onClick: () => {} },\n    { label: 'Open', onClick: () => {} },\n    { divider: true, label: '', onClick: () => {} },\n    { label: 'Exit', danger: true, onClick: () => {} },\n  ]},\n  { label: 'Edit', items: [\n    { label: 'Undo', onClick: () => {} },\n    { label: 'Redo', onClick: () => {} },\n  ]},\n];`} />
      </div>
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Menubar menus={menus} />`}>
          <Menubar menus={[
            { label: 'File', items: [{ label: 'New', onClick: () => {} }, { label: 'Open', onClick: () => {} }, { divider: true, label: '', onClick: () => {} }, { label: 'Exit', danger: true, onClick: () => {} }] },
            { label: 'Edit', items: [{ label: 'Undo', onClick: () => {} }, { label: 'Redo', onClick: () => {} }] },
          ]} />
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'menus', type: 'MenubarMenu[]', description: 'Array of { label, items: MenuItemData[] }.' },
      ]} />
    </CompPageLayout>
  );
}
