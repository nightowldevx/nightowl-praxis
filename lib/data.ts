import { MenuCategory, FeaturedDish, NavLink } from '@/types';

export const navLinks: NavLink[] = [
    { href: '#philosophy', label: 'Philosophy' },
    { href: '#menu', label: 'Menu' },
    { href: '#featured', label: 'Featured' },
    { href: '#reserve', label: 'Reservations' },
];

export const menuCategories: MenuCategory[] = [
    {
        id: 'starters',
        title: 'STARTERS',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Editorial food photography of a refined starter with warm highlights on dark background',
        items: [
            {
                name: 'Oyster, smoked kelp',
                description: 'Cucumber brine, lemon oil, sea herbs.',
                price: 299,
            },
            {
                name: 'Beet tartare',
                description: 'Black garlic, toasted walnut, aged vinegar.',
                price: 250,
            },
            {
                name: 'Consommé, roasted mushroom',
                description: 'Clarified broth, thyme, charred shallot.',
                price: 599,
            },
        ],
    },
    {
        id: 'mains',
        title: 'MAINS',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Editorial food photography of an elegant main course plated on dark surface with warm highlights',
        items: [
            {
                name: 'Dry-aged duck',
                description: 'Sour cherry, smoked jus, winter greens.',
                price: 99,
            },
            {
                name: 'Charcoal cod',
                description: 'Brown butter dashi, citrus, fennel pollen.',
                price: 1000,
            },
            {
                name: 'Celery root, confit allium',
                description: 'Miso glaze, toasted grains, herb oil.',
                price: 999,
            },
        ],
    },
    {
        id: 'desserts',
        title: 'DESSERTS',
        image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Editorial food photography of a refined dessert with warm highlights on dark background',
        items: [
            {
                name: 'Dark chocolate, toasted milk',
                description: 'Cocoa nib, crème fraîche, sea salt.',
                price: 67,
            },
            {
                name: 'Citrus & verbena',
                description: 'Olive oil cake, candied peel, herb steam.',
                price: 76,
            },
            {
                name: 'Pear, burnt honey',
                description: 'Almond cream, chamomile, caramelized whey.',
                price: 499,
            },
        ],
    },
    {
        id: 'drinks',
        title: 'DRINKS / WINE',
        image: 'https://images.unsplash.com/photo-1562601579-599dec564e06?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: 'Editorial beverage photography of wine or cocktail with warm highlights on dark background',
        items: [
            {
                name: 'House aperitif',
                description: 'Gentian, citrus peel, sparkling mineral.',
                price: 69,
            },
            {
                name: 'Sommelier pairing',
                description: 'Five pours, old-world focus, low intervention.',
                price: 99,
            },
            {
                name: 'Glass: Pinot Noir',
                description: 'Silk tannin, dried rose, quiet spice.',
                price: 120,
            },
        ],
    },
];

export const featuredDishes: FeaturedDish[] = [
    {
        id: 'signature',
        label: 'SIGNATURE',
        description: 'Seared scallop, beurre noisette, preserved citrus.',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=2200&q=80',
        imageAlt: 'Close-up editorial dish photography with moody lighting and refined plating',
        size: 'large',
    },
    {
        id: 'finish',
        label: 'FINISH',
        description: 'Cacao, browned butter, salt bloom.',
        image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=2200&q=80',
        imageAlt: 'Close-up dessert photography with dark background and warm highlights',
        size: 'small',
    },
    {
        id: 'aperitif',
        label: 'APERITIF',
        description: 'Gentian, orange, mineral sparkle.',
        image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=2200&q=80',
        imageAlt: 'Close-up cocktail photography with cinematic candlelight bokeh',
        size: 'small',
    },
];
