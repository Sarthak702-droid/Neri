
export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  sources?: GroundingSource[];
}

export interface GroundingSource {
  title: string;
  uri: string;
}

export interface ComplaintData {
  month: string;
  registered: number;
  resolved: number;
}

export interface SchemeData {
  area: string;
  beneficiaries: number;
}
