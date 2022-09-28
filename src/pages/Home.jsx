import React from 'react'

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";

const Home = () => {
    const [items, setItems] = React.useState([])
    const [isLoadin, seIsLoading] = React.useState(true)

    React.useEffect(() => {
        fetch('https://6330443df5fda801f8ddb969.mockapi.io/items')
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
                seIsLoading(false)
            })
    }, [])
    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoadin
                    ? [... new Array(8)].map((_, index) => <Skeleton key={index} />)
                    : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
        </>
    )
}

export default Home