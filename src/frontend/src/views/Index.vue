<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <div class="content__dough">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите тесто</h2>

            <div class="sheet__content dough">
              <label
                v-for="(doughItem, index) in dough"
                :key="doughItem.id"
                class="dough__input"
                :class="`dough__input--${doughItem.nameImage}`"
              >
                <input
                  type="radio"
                  name="dought"
                  :value="doughItem.nameImage"
                  class="visually-hidden"
                  :checked="index === 0 ? 'checked' : ''"
                />
                <b>{{ doughItem.name }}</b>
                <span>{{ doughItem.description }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__diameter">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите размер</h2>

            <div class="sheet__content diameter">
              <label
                v-for="(size, index) in sizes"
                :key="size.id"
                class="diameter__input"
                :class="`diameter__input--${size.nameImage}`"
              >
                <input
                  type="radio"
                  name="diameter"
                  :value="size.nameImage"
                  class="visually-hidden"
                  :checked="index === 1 ? 'checked' : ''"
                />
                <span>{{ size.name }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">
              Выберите ингредиенты
            </h2>

            <div class="sheet__content ingredients">
              <div class="ingredients__sauce">
                <p>Основной соус:</p>

                <label
                  v-for="(sauce, index) in sauces"
                  :key="sauce.id"
                  class="radio ingredients__input"
                >
                  <input
                    type="radio"
                    name="sauce"
                    :value="sauce.name"
                    :checked="index === 0 ? 'checked' : ''"
                  />
                  <span>{{ sauce.name }}</span>
                </label>
              </div>

              <div class="ingredients__filling">
                <p>Начинка:</p>

                <ul class="ingredients__list">
                  <li
                    v-for="ingredient in ingredients"
                    :key="ingredient.id"
                    class="ingredients__item"
                  >
                    <span
                      class="filling"
                      :class="`filling--${ingredient.nameImage}`"
                    >
                      {{ ingredient.name }}
                    </span>

                    <div class="counter counter--orange ingredients__counter">
                      <button
                        type="button"
                        class="counter__button counter__button--minus"
                        disabled
                      >
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input
                        type="text"
                        name="counter"
                        class="counter__input"
                        value="0"
                      />
                      <button
                        type="button"
                        class="counter__button counter__button--plus"
                      >
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
            />
          </label>

          <div class="content__constructor">
            <div class="pizza pizza--foundation--big-tomato">
              <div class="pizza__wrapper">
                <div class="pizza__filling pizza__filling--ananas"></div>
                <div class="pizza__filling pizza__filling--bacon"></div>
                <div class="pizza__filling pizza__filling--cheddar"></div>
              </div>
            </div>
          </div>

          <div class="content__result">
            <p>Итого: 0 ₽</p>
            <button type="button" class="button" disabled>Готовьте!</button>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import pizza from "@/static/pizza.json";
import { addNewValue } from "@/common/helpers";
export default {
  name: "IndexHome",
  data() {
    return {
      dough: pizza?.dough.map((item) => addNewValue(item)),
      sizes: pizza?.sizes.map((item) => addNewValue(item)),
      sauces: pizza?.sauces.map((item) => addNewValue(item)),
      ingredients: pizza?.ingredients.map((item) => addNewValue(item)),
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/layout/main";
</style>
