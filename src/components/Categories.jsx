import React from 'react'

function Categories() {
    const [activeIndex, setActiveindex] = React.useState(0)

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const onClickCategiry = (index) => {
        setActiveindex(index)
    }


    return (
        <div className="categories">
            <ul>
                {categories.map((item, idx) => <li onClick={() => onClickCategiry(idx)}
                    className={activeIndex === idx ? 'active' : ''}>{item}</li>)}
            </ul>
        </div>
    )
}



export default Categories