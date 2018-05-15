import { Location } from './location';
import { Date } from './date';

export class Event {
  id: string;
  title: string;
  image: Images;
  description: string;
  location: Location;
  event_date: Date;
  created_at: Date;
  updated_at: Date;
}

class Images {
  event_image: String;
  event_image_thumb: String;
}
