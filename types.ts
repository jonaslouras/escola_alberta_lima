export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'music' | 'dance';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
