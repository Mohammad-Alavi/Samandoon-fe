import { Location } from './location';

export class Event {
  id: string;
  title: string;
  image: Images;
  description: string;
  location: Location;
}

class Images {
  event_image: String;
  event_image_thumb: String;
}
