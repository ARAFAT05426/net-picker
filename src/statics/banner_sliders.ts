interface BannerSliderProps {
    image: string;
    title: string;
    description: string;
    buttonText: string;
    link: string;
}

const banner_sliders: BannerSliderProps[] = [
    {
        image: "/compare.png",
        title: "Seamless Product Comparison",
        description: "Easily compare prices and features across top brands in real time. Find the best deals on electronics, appliances, fashion, and more!",
        buttonText: "Start Comparing",
        link: "/comparison"
    },
    {
        image: "/pexels-raymond-petrik-1448389535-29040524.jpg",
        title: "AI-Powered Shopping",
        description: "Enjoy a personalized shopping experience with AI recommendations, real-time price updates, and tailored product suggestions.",
        buttonText: "Learn More",
        link: "/ai-features"
    },
    {
        image: "/pexels-raymond-petrik-1448389535-29042003.jpg",
        title: "Secure and Transparent Platform",
        description: "Shop confidently with our advanced security protocols, GDPR compliance, and anti-scraping protections.",
        buttonText: "Discover Security",
        link: "/security"
    },
    {
        image: "/compare.png",
        title: "Affiliate Marketing Revenue",
        description: "Explore our affiliate partnerships and see how Net Picker brings brands and users together for a seamless shopping journey.",
        buttonText: "Join Affiliate Program",
        link: "/affiliate"
    },
    {
        image: "/pexels-raymond-petrik-1448389535-29040524.jpg",
        title: "Coming Soon, Mobile App",
        description: "Get ready for the Net Picker mobile app, bringing product comparison and deals directly to your smartphone.",
        buttonText: "Stay Updated",
        link: "/mobile-app"
    },
    {
        image: "/pexels-raymond-petrik-1448389535-29042003.jpg",
        title: "Multilingual and International",
        description: "Access Net Picker in multiple languages for a truly global shopping experience tailored to your region.",
        buttonText: "Explore Localization",
        link: "/multilingual-support"
    },
    {
        image: "/compare.png",
        title: "Informative Blog & Promotions",
        description: "Stay informed with our latest guides, product reviews, and promotional offers from top brands.",
        buttonText: "Read Our Blog",
        link: "/blog"
    }
];

export default banner_sliders;
