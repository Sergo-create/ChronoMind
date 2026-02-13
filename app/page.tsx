import { supabase } from "../lib/supabase";
import { getEntries } from "../lib/types";

export default async function HomePage(): Promise<JSX.Element> {
  const { entries, error } = await getEntries(supabase);

  return (
    <main style={{ margin: "0 auto", maxWidth: 720, padding: "2rem 1rem" }}>
      <h1>Digital Consciousness MVP</h1>
      <p>Baseline Next.js architecture with Supabase integration.</p>

      {error ? (
        <p style={{ color: "crimson" }}>Failed to load entries: {error}</p>
      ) : entries.length === 0 ? (
        <p>No entries found yet.</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>
              <strong>{entry.title}</strong>
              {entry.content ? <p>{entry.content}</p> : null}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
