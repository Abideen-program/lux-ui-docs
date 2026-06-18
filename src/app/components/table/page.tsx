import { Table } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

interface Row { name: string; role: string; status: string; }

export default function TablePage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Table</h1>
      <p className="section-sub">A typed data table with custom column rendering, striping, and density options.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<Table
  columns={[
    { key: 'name', header: 'Name' },
    { key: 'role', header: 'Role' },
    { key: 'status', header: 'Status' },
  ]}
  data={[
    { name: 'Ada Lovelace', role: 'Engineer', status: 'Active' },
    { name: 'Alan Turing', role: 'Researcher', status: 'Active' },
  ]}
  striped
/>`}>
        <div style={{ width: '100%' }}>
          <Table<Row>
            columns={[
              { key: 'name', header: 'Name' },
              { key: 'role', header: 'Role' },
              { key: 'status', header: 'Status' },
            ]}
            data={[
              { name: 'Ada Lovelace', role: 'Engineer', status: 'Active' },
              { name: 'Alan Turing', role: 'Researcher', status: 'Active' },
            ]}
            striped
          />
        </div>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'columns', type: 'TableColumn<T>[]', description: 'Column definitions with key, header, optional render and align.' },
        { name: 'data', type: 'T[]', description: 'Row data.' },
        { name: 'onRowClick', type: '(row, index) => void', description: 'Row click handler.' },
        { name: 'loading', type: 'boolean', default: 'false', description: 'Shows a loading row.' },
        { name: 'striped', type: 'boolean', default: 'false', description: 'Alternating row backgrounds.' },
        { name: 'dense', type: 'boolean', default: 'false', description: 'Reduces cell padding.' },
        { name: 'stickyHeader', type: 'boolean', default: 'false', description: 'Keeps header visible while scrolling.' },
      ]} />
    </section>
  );
}
