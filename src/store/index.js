import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weekdayRu: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    weekdayEn: ["Mn", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    monthesRu: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],

    monthesEn: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    WEEKDAY_RU(state) {
      return state.weekdayRu;
    },
    WEEKDAY_EN(state) {
      return state.weekdayEn;
    },
    MONTHES_RU(state){
      return state.monthesRu;
    },
    MONTHES_EN(state){
      return state.monthesEn;
    },
  },
});
