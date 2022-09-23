import React from "react";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import './scss/app.scss'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title='Мексиканская' price='500' />
            <PizzaBlock title='Сырная' price='450' />
            <PizzaBlock title='Креветки по-азиатски' price='290' />
            <PizzaBlock title='Сырный цыпленок' price='385' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
