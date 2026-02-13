import type { SupabaseClient } from "@supabase/supabase-js";

export type Database = {
  public: {
    Tables: {
      entries: {
        Row: {
          id: string;
          title: string;
          content: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          content?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          content?: string | null;
          created_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export type Entry = Database["public"]["Tables"]["entries"]["Row"];
export type DbClient = SupabaseClient<Database>;

export interface GetEntriesResult {
  entries: Entry[];
  error: string | null;
}

export async function getEntries(client: DbClient): Promise<GetEntriesResult> {
  const { data, error } = await client
    .from("entries")
    .select("id, title, content, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return { entries: [], error: error.message };
  }

  return { entries: data ?? [], error: null };
}
