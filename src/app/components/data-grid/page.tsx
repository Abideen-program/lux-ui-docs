import { DataGrid } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';
import SampleDataBlock from '@/components/SampleDataBlock';

interface Row { name: string; role: string; status: string; }

const rows: Row[] = [
  { name: 'Ada Lovelace', role: 'Engineer', status: 'Active' },
  { name: 'Alan Turing', role: 'Researcher', status: 'Active' },
  { name: 'Grace Hopper', role: 'Admiral', status: 'Retired' },
  { name: 'Margaret Hamilton', role: 'Director', status: 'Active' },
];

export default function Page() {
  return (
    <CompPageLayout name="DataGrid" description="A full-featured data table: sortable columns, global search, row selection, and pagination.">
      <div className="comp-section">
        <SectionLabel>Data shape</SectionLabel>
        <SampleDataBlock code={`interface Row {\n  name: string;\n  role: string;\n  status: string;\n}\n\nconst rows: Row[] = [\n  { name: 'Ada Lovelace', role: 'Engineer', status: 'Active' },\n  { name: 'Alan Turing', role: 'Researcher', status: 'Active' },\n  { name: 'Grace Hopper', role: 'Admiral', status: 'Retired' },\n];`} />
      </div>

      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<DataGrid<Row>\n  columns={[\n    { key: 'name', header: 'Name', sortable: true },\n    { key: 'role', header: 'Role', sortable: true },\n    { key: 'status', header: 'Status' },\n  ]}\n  data={rows}\n  searchable\n  selectable\n  pageSize={3}\n/>`}>
          <div style={{ width: '100%' }}>
            <DataGrid<Row>
              columns={[
                { key: 'name', header: 'Name', sortable: true },
                { key: 'role', header: 'Role', sortable: true },
                { key: 'status', header: 'Status' },
              ]}
              data={rows}
              searchable
              selectable
              pageSize={3}
            />
          </div>
        </PreviewBlock>
      </div>

      <div className="comp-section">
        <SectionLabel>Column definition shape</SectionLabel>
        <SampleDataBlock title="DataGridColumn<T>" code={`interface DataGridColumn<T> {\n  key: string;            // matches a property on your row object\n  header: string;         // column title shown in the header\n  sortable?: boolean;     // enables click-to-sort on this column\n  render?: (row: T) => ReactNode;  // custom cell content\n  align?: 'left' | 'center' | 'right';\n  width?: string | number;\n}`} />
      </div>

      <PropsTable rows={[
        { name: 'columns', type: 'DataGridColumn<T>[]', description: 'Column definitions with key, header, sortable, render, align.' },
        { name: 'data', type: 'T[]', description: 'Row data — any array of objects.' },
        { name: 'pageSize', type: 'number', default: '10', description: 'Rows per page. 0 disables pagination.' },
        { name: 'searchable', type: 'boolean', default: 'false', description: 'Shows a global search box.' },
        { name: 'selectable', type: 'boolean', default: 'false', description: 'Shows row checkboxes.' },
        { name: 'onSelectionChange', type: '(rows: T[]) => void', description: 'Called when selection changes.' },
        { name: 'striped', type: 'boolean', default: 'false', description: 'Alternating row backgrounds.' },
        { name: 'dense', type: 'boolean', default: 'false', description: 'Reduces cell padding.' },
        { name: 'rowKey', type: '(row: T) => string | number', description: 'Unique key extractor — falls back to index.' },
      ]} />
    </CompPageLayout>
  );
}
