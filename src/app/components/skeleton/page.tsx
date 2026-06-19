import { Skeleton } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Skeleton" description="Placeholder loading states for text, circles, and rectangles.">
      <div className="comp-section">
        <SectionLabel>Variants</SectionLabel>
        <PreviewBlock code={`<Skeleton variant="circular" width={48} height={48} />\n<Skeleton variant="text" width={160} />\n<Skeleton variant="rounded" width={120} height={60} />`}>
          <Skeleton variant="circular" width={48} height={48} />
          <Skeleton variant="text" width={160} />
          <Skeleton variant="rounded" width={120} height={60} />
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'variant', type: "'text' | 'circular' | 'rectangular' | 'rounded'", default: "'text'", description: 'Shape of the skeleton.' },
        { name: 'width', type: 'number | string', description: 'Width override.' },
        { name: 'height', type: 'number | string', description: 'Height override.' },
        { name: 'animation', type: "'pulse' | 'wave' | 'none'", default: "'pulse'", description: 'Animation style.' },
      ]} />
    </CompPageLayout>
  );
}
