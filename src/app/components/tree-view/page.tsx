import { TreeView } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';
import SampleDataBlock from '@/components/SampleDataBlock';

export default function Page() {
  return (
    <CompPageLayout name="TreeView" description="Nested, expandable/collapsible list — ideal for file trees or category hierarchies.">
      <div className="comp-section">
        <SectionLabel>Data shape</SectionLabel>
        <p style={{ fontSize: '0.85rem', color: 'var(--fg-2)', marginBottom: '1rem' }}>
          Nodes are recursive — any node can have its own <code style={{ color: 'var(--cyan)' }}>children</code> array, nested as deep as you need.
        </p>
        <SampleDataBlock title="TreeNode[]" code={`interface TreeNode {\n  id: string;\n  label: string;\n  icon?: ReactNode;\n  children?: TreeNode[];  // nest as deep as needed\n}\n\nconst nodes: TreeNode[] = [\n  {\n    id: '1',\n    label: 'src',\n    children: [\n      { id: '2', label: 'components' },\n      { id: '3', label: 'index.ts' },\n    ],\n  },\n];`} />
      </div>

      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<TreeView nodes={nodes} defaultExpanded={['1']} />`}>
          <div style={{ width: '100%', maxWidth: 240 }}>
            <TreeView
              nodes={[{ id: '1', label: 'src', children: [{ id: '2', label: 'components' }, { id: '3', label: 'index.ts' }] }]}
              defaultExpanded={['1']}
            />
          </div>
        </PreviewBlock>
      </div>

      <PropsTable rows={[
        { name: 'nodes', type: 'TreeNode[]', description: 'Array of { id, label, icon?, children? }.' },
        { name: 'defaultExpanded', type: 'string[]', description: 'Initially expanded node ids.' },
        { name: 'selected', type: 'string', description: 'Currently selected node id.' },
        { name: 'onSelect', type: '(node: TreeNode) => void', description: 'Called when a node is clicked.' },
      ]} />
    </CompPageLayout>
  );
}
