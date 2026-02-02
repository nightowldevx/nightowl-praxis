export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export interface MenuCategory {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  items: MenuItem[];
}

export interface FeaturedDish {
  id: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
  size: 'large' | 'small';
}

export interface NavLink {
  href: string;
  label: string;
}
