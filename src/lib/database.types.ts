export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          user_type: 'athlete' | 'recruiter'
          full_name: string | null
          avatar_url: string | null
          bio: string | null
          location: string | null
          sport: string | null
          position: string | null
          experience_level: string | null
          reputation_score: number | null
          verified: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id: string
          email: string
          user_type: 'athlete' | 'recruiter'
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          location?: string | null
          sport?: string | null
          position?: string | null
          experience_level?: string | null
          reputation_score?: number | null
          verified?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          user_type?: 'athlete' | 'recruiter'
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          location?: string | null
          sport?: string | null
          position?: string | null
          experience_level?: string | null
          reputation_score?: number | null
          verified?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      contracts: {
        Row: {
          id: string
          athlete_id: string
          recruiter_id: string
          title: string
          description: string
          terms: Json
          status: 'pending' | 'active' | 'completed' | 'disputed' | 'cancelled' | null
          start_date: string | null
          end_date: string | null
          payment_amount: number | null
          payment_currency: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          athlete_id: string
          recruiter_id: string
          title: string
          description: string
          terms?: Json
          status?: 'pending' | 'active' | 'completed' | 'disputed' | 'cancelled' | null
          start_date?: string | null
          end_date?: string | null
          payment_amount?: number | null
          payment_currency?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          athlete_id?: string
          recruiter_id?: string
          title?: string
          description?: string
          terms?: Json
          status?: 'pending' | 'active' | 'completed' | 'disputed' | 'cancelled' | null
          start_date?: string | null
          end_date?: string | null
          payment_amount?: number | null
          payment_currency?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contracts_athlete_id_fkey"
            columns: ["athlete_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      opportunities: {
        Row: {
          id: string
          recruiter_id: string
          title: string
          description: string
          sport: string
          position: string | null
          location: string
          requirements: Json
          compensation: Json
          status: 'open' | 'closed' | 'filled' | null
          deadline: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          recruiter_id: string
          title: string
          description: string
          sport: string
          position?: string | null
          location: string
          requirements?: Json
          compensation?: Json
          status?: 'open' | 'closed' | 'filled' | null
          deadline?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          recruiter_id?: string
          title?: string
          description?: string
          sport?: string
          position?: string | null
          location?: string
          requirements?: Json
          compensation?: Json
          status?: 'open' | 'closed' | 'filled' | null
          deadline?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "opportunities_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      waitlist: {
        Row: {
          id: string
          email: string
          user_type: string
          created_at: string | null
        }
        Insert: {
          id?: string
          email: string
          user_type: string
          created_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          user_type?: string
          created_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_type: 'athlete' | 'recruiter'
      contract_status: 'pending' | 'active' | 'completed' | 'disputed' | 'cancelled'
      opportunity_status: 'open' | 'closed' | 'filled'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never