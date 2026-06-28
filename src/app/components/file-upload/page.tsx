'use client';
import { FileUpload } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="FileUpload" description="A drag-and-drop file picker with size validation and a removable file list.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<FileUpload onFilesSelected={setFiles} multiple maxSizeMB={5} hint="PNG, JPG up to 5MB" />`}>
          <div style={{ width: '100%' }}>
            <FileUpload onFilesSelected={() => {}} multiple maxSizeMB={5} hint="PNG, JPG up to 5MB" />
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'onFilesSelected', type: '(files: File[]) => void', description: 'Called when files are added or removed.' },
        { name: 'accept', type: 'string', description: 'MIME types or extensions to accept.' },
        { name: 'multiple', type: 'boolean', default: 'false', description: 'Allow multiple files.' },
        { name: 'maxSizeMB', type: 'number', description: 'Max file size — oversized files are skipped.' },
        { name: 'label', type: 'string', description: 'Drop zone label text.' },
        { name: 'hint', type: 'string', description: 'Helper text below the label.' },
      ]} />
    </CompPageLayout>
  );
}
