interface HighlightParameters {
  page_size?: number;
  page?: number;
  book_id?: number;
  updated__lt?: string;
  updated__gt?: string;
  highlighted_at__lt?: string;
  highlighted_at__gt?: string;
}

interface Highlight {
  id: number;
  text: string;
  note: string;
  location: number;
  location_type: string;
  highlighted_at: string;
  url: string;
  color: string;
  updated: string;
  book_id: number;
  tags: Tag[];
}

interface HighlightsRequest {
  count: number;
  next: string;
  previous: null;
  results: Highlight[];
}
