interface BentoOfferProps {
    id: number;
    title: string;
    thumb: string;
    description: string;
    ctaText: string;
    link: string;
}

const bento_offers: BentoOfferProps[] = [
    {
        id: 1,
        title: '50% Off on Electronics',
        thumb: '/offer-man.png',
        description: 'Huge discounts on the latest electronics. Limited time only!',
        ctaText: 'Shop Now',
        link: '/electronics'
    },
    {
        id: 2,
        title: 'Buy 1 Get 1 Free',
        thumb: '/offer-laptop.png',
        description: 'Get double the value with this limited offer.',
        ctaText: 'Grab the Deal',
        link: '/buy-one-get-one'
    },
    {
        id: 3,
        title: 'Exclusive Furniture Deals',
        thumb: '/offer-handbag.png',
        description: 'Upgrade your living space with stylish furniture at unbeatable prices.',
        ctaText: 'Explore Now',
        link: '/furniture'
    },
    {
        id: 4,
        title: 'Fashion Fiesta',
        thumb: '/offer-accessories.png',
        description: 'Trendy outfits and accessories at jaw-dropping prices.',
        ctaText: 'Shop the Look',
        link: '/fashion'
    },
    {
        id: 5,
        title: 'Smartphone Sale',
        thumb: '/offer-mobile.png',
        description: 'Get the latest smartphones with amazing discounts!',
        ctaText: 'Buy Now',
        link: '/smartphones'
    }
];

export default bento_offers;
