import React from 'react'

function Categories() {
    const [activeIndex, setActiveindex] = React.useState(0)

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']


    return (
        <div className="categories">
            <ul>
                {categories.map((item, i) =>
                    <li
                        key={i}
                        onClick={() => setActiveindex(i)}
                        className={activeIndex === i ? 'active' : ''}>{item}
                    </li>)}
            </ul>
        </div>
    )
}



export default Categories