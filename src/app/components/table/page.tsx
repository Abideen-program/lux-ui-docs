import { Table } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

interface Row { name: string; role: string; status: string; }

export default function Page() {
  return (
    <CompPageLayout name="Table" description="A typed data table with custom column rendering, striping, and density options.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Table\n  columns={[{ key: 'name', header: 'Name' }, { key: 'role', header: 'Role' }, { key: 'status', header: 'Status' }]}\n  data={[{ name: 'Ada Lovelace', role: 'Engineer', status: 'Active' }]}\n  striped\n/>`}>
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
