import { CANDIDATE, ELIGIBLE_CANDIDATE } from "@/config";

export type CandidateAddress = typeof CANDIDATE | typeof ELIGIBLE_CANDIDATE;
export type Candidate = {
  occupation: string;
  address: CandidateAddress;
}

export const candidates: Candidate[] = [
  {
    occupation: 'PhD Researcher',
    address: CANDIDATE,
  },
  {
    occupation: 'Fullstack developer',
    address: ELIGIBLE_CANDIDATE,
  },
  {
    occupation: 'Network engineer',
    address: ELIGIBLE_CANDIDATE,
  },
  {
    occupation: 'Degen maxi',
    address: ELIGIBLE_CANDIDATE,
  },
  {
    occupation: 'Unknown',
    address: CANDIDATE,
  },
  {
    occupation: 'Tatoo Artist',
    address: CANDIDATE,
  }
]; 