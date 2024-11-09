import LinkBtn from "../btns/LinkBtn";

const ExlopreCollection = () => {
        return (<section className="h-[500px] bg-cover bg-center bg-no-repeat bg-fixed" style={{
                backgroundImage: `url('/collection.png')`
        }}>
                <div className="relative h-full container flex items-center justify-start">
                        <div className="bg-white h-3/5 px-8 py-10 flex flex-col justify-center rounded-sm">
                                <span className="text-sm font-semibold">FUNCTIONAL AND STYLISH</span>
                                <h1 className="text-4xl font-medium">Mid-Century Modern</h1>
                                <p className="pb-5">Find furniture that seamlessly combines functionality and style</p>
                                <LinkBtn className="w-fit" to="collection">
                                        Shop Collection
                                </LinkBtn>
                        </div>
                </div>
        </section>);
}
export default ExlopreCollection;