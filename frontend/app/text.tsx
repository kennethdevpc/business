import { BookText, CodeSquare, HomeIcon, UserRound } from 'lucide-react';

export const itemsNavbar = [
  {
    id: 1,
    title: 'about Us',
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: '/aboutUs',
  },
  {
    id: 2,
    title: 'Plans & Pricing',
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: '/plans',
  },
  {
    id: 3,
    title: 'schedule',
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: '/schedule',
  },
  {
    id: 4,
    title: 'Contact',
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: '/contact',
  },
];
