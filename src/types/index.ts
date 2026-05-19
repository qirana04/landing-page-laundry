export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
  whatsappMessage: string;
  category: 'laundry' | 'homeservice';
}

export interface PriceItem {
  label: string;
  price: number;
  unit: string;
}

export interface PriceCategory {
  id: string;
  name: string;
  items: PriceItem[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export interface FAQ {
  question: string;
  answer: string;
}
