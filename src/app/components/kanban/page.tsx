'use client';
import { useState } from 'react';
import { Kanban } from 'lux-ui';
import type { KanbanColumnData } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';
import SampleDataBlock from '@/components/SampleDataBlock';

export default function Page() {
  const [columns, setColumns] = useState<KanbanColumnData[]>([
    { id: 'todo', title: 'To Do', cards: [{ id: '1', title: 'Design homepage', tone: 'primary' }, { id: '2', title: 'Write copy' }] },
    { id: 'doing', title: 'In Progress', cards: [{ id: '3', title: 'Build navbar', tone: 'warning' }] },
    { id: 'done', title: 'Done', cards: [{ id: '4', title: 'Setup repo', tone: 'success' }] },
  ]);

  return (
    <CompPageLayout name="Kanban" description="A drag-and-drop board for moving cards between columns.">
      <div className="comp-section">
        <SectionLabel>Data shape</SectionLabel>
        <SampleDataBlock title="KanbanColumnData[]" code={`interface KanbanCard {\n  id: string;\n  title: string;\n  description?: string;\n  tone?: LuxTone;\n}\n\ninterface KanbanColumnData {\n  id: string;\n  title: string;\n  cards: KanbanCard[];\n}\n\nconst columns: KanbanColumnData[] = [\n  { id: 'todo', title: 'To Do', cards: [\n    { id: '1', title: 'Design homepage', tone: 'primary' },\n    { id: '2', title: 'Write copy' },\n  ]},\n  { id: 'doing', title: 'In Progress', cards: [\n    { id: '3', title: 'Build navbar', tone: 'warning' },\n  ]},\n  { id: 'done', title: 'Done', cards: [] },\n];`} />
      </div>

      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Kanban columns={columns} onChange={setColumns} />`}>
          <div style={{ width: '100%' }}>
            <Kanban columns={columns} onChange={setColumns} />
          </div>
        </PreviewBlock>
      </div>

      <PropsTable rows={[
        { name: 'columns', type: 'KanbanColumnData[]', description: 'Array of { id, title, cards }.' },
        { name: 'onChange', type: '(columns) => void', description: 'Called after a card is dragged to a new column.' },
        { name: 'onCardClick', type: '(card, columnId) => void', description: 'Card click handler.' },
      ]} />
    </CompPageLayout>
  );
}
