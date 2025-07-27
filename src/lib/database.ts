import { supabase } from './supabase';
import type { Database } from './database.types';

type Tables = Database['public']['Tables'];
type Profile = Tables['profiles']['Row'];
type Contract = Tables['contracts']['Row'];
type Opportunity = Tables['opportunities']['Row'];
type WaitlistEntry = Tables['waitlist']['Row'];

export const db = {
  // Profiles
  profiles: {
    async getAll() {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },

    async getById(id: string) {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    },

    async getByUserType(userType: 'athlete' | 'recruiter') {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_type', userType)
        .order('reputation_score', { ascending: false });
      
      if (error) throw error;
      return data;
    },

    async getBySport(sport: string) {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('sport', sport)
        .eq('user_type', 'athlete')
        .order('reputation_score', { ascending: false });
      
      if (error) throw error;
      return data;
    },

    async update(id: string, updates: Partial<Profile>) {
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
  },

  // Contracts
  contracts: {
    async getAll() {
      const { data, error } = await supabase
        .from('contracts')
        .select(`
          *,
          athlete:profiles!contracts_athlete_id_fkey(*),
          recruiter:profiles!contracts_recruiter_id_fkey(*)
        `)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },

    async getById(id: string) {
      const { data, error } = await supabase
        .from('contracts')
        .select(`
          *,
          athlete:profiles!contracts_athlete_id_fkey(*),
          recruiter:profiles!contracts_recruiter_id_fkey(*)
        `)
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    },

    async getByUserId(userId: string) {
      const { data, error } = await supabase
        .from('contracts')
        .select(`
          *,
          athlete:profiles!contracts_athlete_id_fkey(*),
          recruiter:profiles!contracts_recruiter_id_fkey(*)
        `)
        .or(`athlete_id.eq.${userId},recruiter_id.eq.${userId}`)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },

    async create(contract: Tables['contracts']['Insert']) {
      const { data, error } = await supabase
        .from('contracts')
        .insert(contract)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },

    async update(id: string, updates: Partial<Contract>) {
      const { data, error } = await supabase
        .from('contracts')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
  },

  // Opportunities
  opportunities: {
    async getAll() {
      const { data, error } = await supabase
        .from('opportunities')
        .select(`
          *,
          recruiter:profiles!opportunities_recruiter_id_fkey(*)
        `)
        .eq('status', 'open')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },

    async getById(id: string) {
      const { data, error } = await supabase
        .from('opportunities')
        .select(`
          *,
          recruiter:profiles!opportunities_recruiter_id_fkey(*)
        `)
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    },

    async getByRecruiterId(recruiterId: string) {
      const { data, error } = await supabase
        .from('opportunities')
        .select(`
          *,
          recruiter:profiles!opportunities_recruiter_id_fkey(*)
        `)
        .eq('recruiter_id', recruiterId)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },

    async getBySport(sport: string) {
      const { data, error } = await supabase
        .from('opportunities')
        .select(`
          *,
          recruiter:profiles!opportunities_recruiter_id_fkey(*)
        `)
        .eq('sport', sport)
        .eq('status', 'open')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },

    async create(opportunity: Tables['opportunities']['Insert']) {
      const { data, error } = await supabase
        .from('opportunities')
        .insert(opportunity)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },

    async update(id: string, updates: Partial<Opportunity>) {
      const { data, error } = await supabase
        .from('opportunities')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
  },

  // Waitlist
  waitlist: {
    async getAll() {
      const { data, error } = await supabase
        .from('waitlist')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },

    async add(email: string, userType: string) {
      try {
        const { data, error } = await supabase
          .from('waitlist')
          .insert({ 
            email: email.toLowerCase().trim(), 
            user_type: userType 
          })
          .select()
          .single();
      
        if (error) {
          console.error('Supabase error:', error);
          
          // Handle duplicate email
          if (error.code === '23505') {
            throw new Error('This email is already on the waitlist');
          }
          
          // Handle other errors
          throw new Error('Failed to join waitlist. Please try again.');
        }
        
        return data;
      } catch (error) {
        // Re-throw our custom errors
        if (error instanceof Error) {
          throw error;
        }
        
        // Handle unexpected errors
        throw new Error('An unexpected error occurred. Please try again.');
      }
    },
  },
};