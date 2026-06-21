interface SampleDataBlockProps {
  title?: string;
  code: string;
}

export default function SampleDataBlock({ title = 'Sample data', code }: SampleDataBlockProps) {
  return (
    <div className="code-block" style={{ marginBottom: '1.25rem' }}>
      <div className="code-block-header">{title}</div>
      <pre className="code-block-inner">{code}</pre>
    </div>
  );
}
