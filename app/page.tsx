import type { ReactElement } from "react";
import { getEntries } from "../lib/types";

export default async function HomePage(): Promise<ReactElement> {
  const { entries, error } = await getEntries();

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
