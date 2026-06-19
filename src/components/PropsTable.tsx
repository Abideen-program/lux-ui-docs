export interface PropRow {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export default function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="props-section">
      <h2 className="props-section-title">Props</h2>
      <div className="props-table-wrap">
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
                <td className="prop-name">{row.name}</td>
                <td className="prop-type">{row.type}</td>
                <td className="prop-default">{row.default || '—'}</td>
                <td className="prop-desc">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
