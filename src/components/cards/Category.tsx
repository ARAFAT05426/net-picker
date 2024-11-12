import type { FC } from 'react';

interface CategoryProps {
    name: string,
    slug: string,
    image: string
}

interface Props {
    category: CategoryProps
}

const Category: FC<Props> = ({ category }) => {
    return (<div className='relative group'>

    </div>);
}
export default Category;