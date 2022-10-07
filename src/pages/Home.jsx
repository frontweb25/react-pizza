import React from 'react'

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";

const Home = () => {
    const [items, setItems] = React.useState([])
    const [isLoadin, seIsLoading] = React.useState(true)
    const [categoryId, setCategoryId] = React.useState(0)
    const [sortType, setSortType] = React.useState({
        name: 'популярности',
        sortProperty: 'rating'
    })
    React.useEffect(() => {
        seIsLoading(true)

        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
        const sortBy = sortType.sortProperty.replace('-', '');
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        fetch(`https://6330443df5fda801f8ddb969.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
                seIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType])
    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={setCategoryId} />
                <Sort value={sortType} onClickSort={setSortType} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoadin
                    ? [... new Array(8)].map((_, index) => <Skeleton key={index} />)
                    : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
        </div>
    )
}

export default Home