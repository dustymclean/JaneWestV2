
export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  featuredItems: string[];
  status?: string;
  colorTheme: string;
}

export interface ProductSEO {
  category: string;
  keywords: string[];
}
