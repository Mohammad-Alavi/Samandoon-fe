import { Location } from './location';
import { Date } from './date';

export class Ngo {
  id: string;
  name: string;
  public_name: string;
  description: string;
  location: Location;
  images: Images;
  subject: Subject[];
  phone: Phone[];
  area_of_activity: string;
  status: string;
  zip_code: string;
  type: string;
  confirmed: boolean;
  registration_specification: RegistrationSpecification;
  followers_count: number;
  article_count: number;
  event_count: number;
  created_at: Date;
  updated_at: Date;
}

class Images {
  ngo_logo: string;
  ngo_logo_thumb: string;
  ngo_banner: string;
  ngo_banner_thumb: string;
}

class RegistrationSpecification {
  national_number: string;
  registration_number: string;
  registration_date: string;
  registration_unit: string;
}

class Subject {
  id: number;
  subject: string;
}

class Phone {
  id: number;
  label: string;
  phone_number: string;
}
