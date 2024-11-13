import PageTitle from "../components/common/PageTitle"
import FilterWidget from "../components/shop_page/FilterWidget"

const Shop = () => {
    return (
        <>
            <PageTitle title="Shop" />
            <section className="container">
                <FilterWidget />
            </section>
        </>
    )
}

export default Shop
