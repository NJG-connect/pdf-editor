import logo from './logo.svg';
import icon from './icon.svg';
import avatar from './avatar.png';
import logoEntreprise from './logoEntreprise.png';
import more from './more.png';
import pdf from './pdf.png';
import back from './back.png';
import search from './search.png';
import ticket from './ticket.png';
import unsplash1 from './unsplash1.png';
import unsplash2 from './unsplash2.png';

const images = {
  logo,
  icon,
  avatar,
  logoEntreprise,
  more,
  pdf,
  back,
  search,
  ticket,
  unsplash1,
  unsplash2,
};

export type ImageType =
  | 'logo'
  | 'icon'
  | 'avatar'
  | 'logoEntreprise'
  | 'more'
  | 'pdf'
  | 'back'
  | 'search'
  | 'ticket'
  | 'unsplash1'
  | 'unsplash2';

export default images;
