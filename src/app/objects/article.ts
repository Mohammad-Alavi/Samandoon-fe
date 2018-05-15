export class Article {
  id: string;
  text: string;
  image: Images;
  like_count: number;
  comment_count: number;
  seen_count: number;
}

class Images {
  article_image: string;
  article_image_thumb: string;
}
