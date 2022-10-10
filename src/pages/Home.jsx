import React from 'react'

import Categories from "../components/Categories";
import Pagination from '../components/Pagination';
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";

const Home = ({ searchValue }) => {
    const [items, setItems] = React.useState([])
    const [isLoadin, seIsLoading] = React.useState(true)
    const [categoryId, setCategoryId] = React.useState(0)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [orderType, setOrderType] = React.useState("desc")
    const [sortType, setSortType] = React.useState({
        name: 'популярности',
        sortProperty: 'rating'
    })
    React.useEffect(() => {
        seIsLoading(true)

        const sortBy = sortType.sortProperty.replace('-', '');
        const category = categoryId > 0 ? `category=${categoryId}` : '';

        fetch(`https://6330443df5fda801f8ddb969.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${orderType}`)
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
                seIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType, searchValue, currentPage])

    const pizzas = items.filter((obj) => obj.title.toLowerCase()
        .includes(searchValue.toLowerCase()))
        .map((obj) => <PizzaBlock key={obj.id} {...obj} />)

    const skeleton = [... new Array(8)].map((_, index) => <Skeleton key={index} />)

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={setCategoryId} />
                <Sort value={sortType} onClickSort={setSortType} sortBtnBy={setOrderType} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoadin ? skeleton : pizzas}
            </div>
            <Pagination onChangePage={number => setCurrentPage(number)}/>
        </div>
    )
}

export default Home