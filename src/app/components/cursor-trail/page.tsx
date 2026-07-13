import { CursorTrail } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="CursorTrail" description="A canvas-based particle trail that follows the cursor — wrap any content with it.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<CursorTrail color="#f472b6">\n  <div>Move your cursor here</div>\n</CursorTrail>`}>
          <div style={{ width: '100%', height: 140 }}>
            <CursorTrail color="#f472b6">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 140, fontSize: '0.85rem', opacity: 0.6 }}>
                Move your cursor here
              </div>
            </CursorTrail>
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'color', type: 'string', default: "'var(--lux-primary)'", description: 'Trail particle color.' },
        { name: 'particleCount', type: 'number', default: '16', description: 'Number of trail particles.' },
        { name: 'size', type: 'number', default: '6', description: 'Max particle size in px.' },
      ]} />
    </CompPageLayout>
  );
}
