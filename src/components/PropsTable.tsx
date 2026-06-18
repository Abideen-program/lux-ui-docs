export interface PropRow {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export default function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <table className="props-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.name}>
            <td><code>{row.name}</code></td>
            <td style={{ color: 'var(--fg-muted)', fontSize: '0.78rem' }}>{row.type}</td>
            <td style={{ color: 'var(--fg-dim)', fontSize: '0.78rem' }}>{row.default || '—'}</td>
            <td style={{ color: 'var(--fg-muted)' }}>{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
