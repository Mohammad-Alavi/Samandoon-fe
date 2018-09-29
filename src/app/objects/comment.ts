import { Date } from './date';

export class Comment {
  id: string;
  body: string;
  creator_id: string;
  creator_data: CommentUser;
  created_at: Date;
  updated_at: Date;
}

class CommentUser {
  first_name: string;
  last_name: string;
  images: CommentUserAvatar;
}

class CommentUserAvatar {
  avatar_thumb: string;
}
