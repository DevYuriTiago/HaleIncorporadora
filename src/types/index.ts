export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'development' | 'condominium' | 'residence';
  location: string;
  images: string[];
  features: string[];
  status: 'completed' | 'ongoing';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}