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
  ngo_data: CommentNgo;

  hasNgo = this.ngo_data.ngo_id != null;
  hasConfirmedNgo = this.hasNgo && this.ngo_data.confirmed === true;
}

class CommentNgo {
  ngo_id: string;
  name: string;
  public_name: string;
  confirmed: boolean;
}

class CommentUserAvatar {
  avatar_thumb: string;
}
