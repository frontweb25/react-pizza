import React from "react";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import './scss/app.scss'

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
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
