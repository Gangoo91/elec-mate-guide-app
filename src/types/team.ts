
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  phone: string | null;
  email: string | null;
  skills: string[] | null;
  availability: string | null;
}

export interface TeamSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export interface TeamMemberListProps {
  teamMembers: TeamMember[];
  isLoading: boolean;
}
