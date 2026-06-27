import { List, ListItem, Avatar } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="List" description="A vertical list with leading/trailing slots, primary/secondary text, and dividers.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<List divided>\n  <ListItem leading={<Avatar initials="AB" size="sm" />} primary="Abideen" secondary="abideen@email.com" />\n  <ListItem leading={<Avatar initials="CD" size="sm" />} primary="Chidi" secondary="chidi@email.com" />\n</List>`}>
          <div style={{ width: '100%', maxWidth: 280 }}>
            <List divided>
              <ListItem leading={<Avatar initials="AB" size="sm" />} primary="Abideen" secondary="abideen@email.com" />
              <ListItem leading={<Avatar initials="CD" size="sm" />} primary="Chidi" secondary="chidi@email.com" />
            </List>
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'divided', type: 'boolean', default: 'false', description: 'Shows dividers between items.' },
        { name: 'dense', type: 'boolean', default: 'false', description: 'Compact spacing.' },
        { name: 'leading / trailing', type: 'ReactNode', description: '(ListItem) Icon or avatar slots.' },
        { name: 'primary / secondary', type: 'ReactNode', description: '(ListItem) Main and supporting text.' },
        { name: 'selected', type: 'boolean', default: 'false', description: '(ListItem) Highlighted state.' },
        { name: 'onClick', type: '() => void', description: '(ListItem) Makes the row clickable.' },
      ]} />
    </CompPageLayout>
  );
}
