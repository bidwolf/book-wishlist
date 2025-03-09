export type Pagination = {
  per_page: number;
  current_page: number;
  query: string;
  page_name: string;
  total: number;
  last_page: number;
  last_page_url: string;
  first_page_url: string;
  next_page_url: string;
  prev_page_url: string;
  from: number;
  to: number;
  path: string;
  links: Link[];
}
export type Link = {
  active: boolean;
  label: string;
  url: string;
}