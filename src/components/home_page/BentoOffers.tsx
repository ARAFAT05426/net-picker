import bento_offers from "../../statics/bento_offers";

const BentoOffers = () => {
    return (
        <section className="container py-5">
            <div className="min-h-[30rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 lg:grid-rows-6 gap-2.5">
                {bento_offers.map((offer, index) => {
                    return (
                        <div
                            key={index}
                            className={`relative min-h-full bg-cover bg-no-repeat 
                                ${index === 0 && "lg:col-span-5 lg:row-span-3"} 
                                ${index === 1 && "lg:col-span-3 lg:row-span-4"} 
                                ${index === 2 && "lg:col-span-3 lg:row-span-4"} 
                                ${index === 3 && "lg:col-span-2 lg:row-span-4"} 
                                ${index === 4 && "lg:col-span-3 lg:row-span-2"}
                                rounded-sm overflow-hidden p-5 text-white transform transition-all duration-300 shadow-md`}
                            style={{
                                backgroundImage: `url('${offer?.thumb}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-black opacity-50" />
                            <div className="relative h-full flex flex-col items-start justify-end z-10">
                                <h3 className="text-lg tracking-widest font-semibold">{offer.title}</h3>
                                <button className="mt-1.5 px-5 py-2 bg-white text-sm text-primary tracking-wider font-semibold rounded-sm transition duration-300 transform hover:-translate-y-0.5">
                                    View Offer
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default BentoOffers;
