export class Ngo {
  id: string;
  name: string;
  description: string;
  images: Images;
  area_of_activity: string;
  status: string;
  zip_code: string;
  type: string;
  confirmed: boolean;
}

class Images {
  ngo_logo: string;
  ngo_logo_thumb: string;
  ngo_banner: string;
  ngo_banner_thumb: string;
}
