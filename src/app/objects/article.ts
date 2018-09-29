import { Date } from './date';
import { Ngo } from './ngo';

export class Article {
  id: string;
  title: string;
  text: string;
  image: Images;
  ngo: Ngo;
  like_count: number;
  comment_count: number;
  seen_count: number;
  created_at: Date;
  updated_at: Date;
}

class Images {
  article_image: string;
  article_image_thumb: string;
}
