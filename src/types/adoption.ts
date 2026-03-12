export type AdoptionRequestStatus = 'pending' | 'accepted' | 'rejected';

export type AdoptionRequest = {
  id: number;
  pet_id: number;
  username: string;
  email: string;
  phone: string;
  status: AdoptionRequestStatus;
  created_at: string;
};
