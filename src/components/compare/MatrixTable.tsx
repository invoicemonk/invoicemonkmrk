import { CheckCircle, XCircle } from 'lucide-react';

interface MatrixRow {
  label: string;
  values: (boolean | string | number)[];
}

interface MatrixTableProps {
  headers: string[];
  rows: MatrixRow[];
  highlightColumnIndex?: number;
  footnote?: string;
  caption?: string;
}

function Cell({ value }: { value: boolean | string | number }) {
  if (typeof value === 'boolean') {
    return value ? (
      <CheckCircle className="w-5 h-5 text-green-600 mx-auto" aria-label="Yes" />
    ) : (
      <XCircle className="w-5 h-5 text-muted-foreground/40 mx-auto" aria-label="No" />
    );
  }
  return <span className="text-sm text-foreground">{value}</span>;
}

export function MatrixTable({ headers, rows, highlightColumnIndex = 1, footnote, caption }: MatrixTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-left border-collapse">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead className="bg-muted/50 sticky top-0">
          <tr className="border-b border-border">
            {headers.map((h, i) => (
              <th
                key={i}
                className={`py-3 px-4 text-sm font-semibold whitespace-nowrap ${
                  i === highlightColumnIndex ? 'text-primary' : 'text-foreground'
                } ${i === 0 ? 'text-left' : 'text-center'}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
              <td className="py-3 px-4 text-sm font-medium text-foreground">{row.label}</td>
              {row.values.map((v, j) => (
                <td
                  key={j}
                  className={`py-3 px-4 text-center align-middle ${
                    j + 1 === highlightColumnIndex ? 'bg-primary/5' : ''
                  }`}
                >
                  <Cell value={v} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {footnote && <p className="text-xs text-muted-foreground p-3 border-t border-border">{footnote}</p>}
    </div>
  );
}
