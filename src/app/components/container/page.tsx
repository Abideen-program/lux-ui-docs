import { Container } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Container" description="A centered, max-width content wrapper with responsive breakpoints.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Container maxWidth="sm" style={{ background: 'var(--lux-surface-1)', borderRadius: 8, padding: '1rem' }}>\n  Centered content, max-width sm\n</Container>`}>
          <Container maxWidth="sm" style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '1rem' }}>Centered content, max-width sm</Container>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'maxWidth', type: "'sm' | 'md' | 'lg' | 'xl' | 'full'", default: "'lg'", description: 'Max width breakpoint.' },
        { name: 'disableGutters', type: 'boolean', default: 'false', description: 'Removes horizontal padding.' },
      ]} />
    </CompPageLayout>
  );
}
