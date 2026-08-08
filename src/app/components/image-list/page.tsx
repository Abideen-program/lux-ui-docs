import { ImageList } from 'lux-ui';
import PreviewBlock from '@/components/atoms/PreviewBlock';
import PropsTable from '@/components/atoms/PropsTable';
import CompPageLayout from '@/components/atoms/CompPageLayout';
import SectionLabel from '@/components/atoms/SectionLabel';
import SampleDataBlock from '@/components/atoms/SampleDataBlock';

export default function Page() {
  return (
    <CompPageLayout name="ImageList" description="A responsive grid of images, in standard or masonry layout.">
      <div className="comp-section">
        <SectionLabel>Data shape</SectionLabel>
        <SampleDataBlock title="ImageListItemData[]" code={`interface ImageListItemData {\n  src: string;\n  alt?: string;\n  title?: ReactNode;\n  subtitle?: ReactNode;\n}\n\nconst items: ImageListItemData[] = [\n  { src: '/photo-a.jpg', title: 'Mountains' },\n  { src: '/photo-b.jpg', title: 'Ocean' },\n];`} />
      </div>
      <PropsTable rows={[
        { name: 'items', type: 'ImageListItemData[]', description: 'Array of { src, alt?, title?, subtitle? }.' },
        { name: 'cols', type: 'number', default: '3', description: 'Number of columns.' },
        { name: 'gap', type: 'number', default: '8', description: 'Gap between items in px.' },
        { name: 'variant', type: "'standard' | 'masonry'", default: "'standard'", description: 'Layout style.' },
        { name: 'aspectRatio', type: 'string', default: "'1 / 1'", description: '(standard only) Image aspect ratio.' },
        { name: 'onItemClick', type: '(item, index) => void', description: 'Click handler.' },
      ]} />
    </CompPageLayout>
  );
}
