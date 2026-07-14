import { Table } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';
import SampleDataBlock from '@/components/SampleDataBlock';

interface Row { name: string; role: string; status: string; }

export default function Page() {
  return (
    <CompPageLayout name="Table" description="A typed data table with custom column rendering, striping, and density options.">
      <div className="comp-section">
        <SectionLabel>Data shape</SectionLabel>
        <SampleDataBlock code={`interface Row {\n  name: string;\n  role: string;\n  status: string;\n}\n\nconst data: Row[] = [\n  { name: 'Ada Lovelace', role: 'Engineer', status: 'Active' },\n  { name: 'Alan Turing', role: 'Researcher', status: 'Active' },\n];`} />
      </div>

      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Table\n  columns={[\n    { key: 'name', header: 'Name' },\n    { key: 'role', header: 'Role' },\n    { key: 'status', header: 'Status' },\n  ]}\n  data={data}\n  striped\n/>`}>
          <div style={{ width: '100%' }}>
            <Table<Row>
              columns={[{ key: 'name', header: 'Name' }, { key: 'role', header: 'Role' }, { key: 'status', header: 'Status' }]}
              data={[{ name: 'Ada Lovelace', role: 'Engineer', status: 'Active' }, { name: 'Alan Turing', role: 'Researcher', status: 'Active' }]}
              striped
            />
          </div>
        </PreviewBlock>
      </div>

      <PropsTable rows={[
        { name: 'columns', type: 'TableColumn<T>[]', description: 'Column definitions with key, header, optional render and align.' },
        { name: 'data', type: 'T[]', description: 'Row data.' },
        { name: 'onRowClick', type: '(row, index) => void', description: 'Row click handler.' },
        { name: 'loading', type: 'boolean', default: 'false', description: 'Shows a loading row.' },
        { name: 'striped', type: 'boolean', default: 'false', description: 'Alternating row backgrounds.' },
        { name: 'dense', type: 'boolean', default: 'false', description: 'Reduces cell padding.' },
        { name: 'stickyHeader', type: 'boolean', default: 'false', description: 'Keeps header visible while scrolling.' },
      ]} />
    </CompPageLayout>
  );
}
