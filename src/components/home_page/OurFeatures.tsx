import { useTranslation } from "react-i18next";
import our_features from "../../statics/our_features";

const OurFeatures = () => {
    const { t } = useTranslation()
    return (
        <section className="w-full">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2.5 items-center py-10">
                {our_features?.map((feature, i) => (
                    <div
                        key={i}
                        className="group relative h-full border space-y-1.5 px-4 sm:px-6 md:px-8 lg:px-8 py-6 bg-white overflow-hidden rounded-sm transition-all duration-500"
                    >
                        <div className="relative w-fit">
                            <feature.icon
                                className="relative text-primary group-hover:text-white transition-all duration-500 z-[2]"
                                size={55}
                                strokeWidth={0.75}
                            />
                            <span className="absolute inset-y-1/2 right-0 h-8 w-14 rounded-sm opacity-0 bg-secondary/25 z-[1] group-hover:opacity-100 transition-all duration-500" />
                        </div>
                        <h1 className="relative text-lg md:text-xl tracking-wide font-semibold group-hover:text-white transition-all duration-500 z-[1]">
                            {t(feature?.title)}
                        </h1>
                        <p className="relative text-xs group-hover:text-white transition-all duration-500 z-[1]">
                            {t(feature?.description)}
                        </p>
                        <span className="absolute -top-1.5 inset-x-0 scale-75 opacity-0 w-full h-full bg-primary group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurFeatures;
