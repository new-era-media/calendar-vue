<template>
  <div>
    <div class="lang">
      <label for="Ru">Ru</label>
      <input type="radio" id="Ru" value="Ru" v-model="lang" />

      <input type="radio" id="En" value="En" v-model="lang" />
      <label for="En">En</label>
    </div>
    <div class="calendar">
      <div class="month">
        <button @click="reduceDate">&#9668;</button>
        <p>{{monthes[month]}} {{year}}</p>
        <button @click="increaseDate">&#9658;</button>
      </div>
      <hr />
      <div class="weekdays">
        <span class="weekday" v-for="(day, i) in weekday" :key="i">{{day}}</span>
      </div>
      <hr />
      <div class="days">
        <span
          @click="activDate(day, $event)"
          :data-id="day"
          class="day"
          :ref="i+1"
          v-for="(day, i) in dayInMonth"
          :key="i"
        >{{day}}</span>
      </div>
    </div>
    <div class="date">{{date}}</div>
  </div>
</template>
<script>
export default {
  props: ["dateProps"],
  data() {
    return {
      lang: "Ru",
      date: "",
      idArr: [],
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    };
  },
  mounted() {
    if (this.dateProps) {
      const time = this.dateProps.split("-");
      const date = new Date(`${time[0]}-${time[1]}-${time[2]}T03:24:00`);

      const day = date.getDate();
      this.year = date.getFullYear();
      this.month = date.getMonth();
      this.activDate(day);

      this.date = `${this.year}  / ${this.month + 1} / ${day}`;
    } else {
      this.currentDate();
    }
  },
  computed: {
    monthes() {
      if (this.lang === "Ru") {
        return this.$store.getters.MONTHES_RU;
      } else {
        return this.$store.getters.MONTHES_EN;
      }
    },
    weekday() {
      if (this.lang === "Ru") {
        return this.$store.getters.WEEKDAY_RU;
      } else {
        return this.$store.getters.WEEKDAY_EN;
      }
    },
    dayInMonth() {
      const daysInMounth = new Date(this.year, this.month + 1, 0).getDate();
      const days = [];
      for (let i = 1; i <= daysInMounth; i++) {
        days.push(i);
      }
      const weekday = new Date(this.year, this.month, 1).getDay();
      for (let i = 1; i < weekday; i++) {
        days.unshift("");
      }
      return days;
    }
  },
  methods: {
    increaseDate() {
      this.month++;
      if (this.month > 11) {
        this.month = 0;
        this.year++;
      }
      this.clearActiveDate();
      this.currentDate();
    },
    reduceDate() {
      this.month--;
      if (this.month < 0) {
        this.month = 11;
        this.year--;
      }
      this.clearActiveDate();
      this.currentDate();
    },
    currentDate() {
      if (
        this.year === new Date().getFullYear() &&
        this.month === new Date().getMonth()
      ) {
        this.activDate(new Date().getDate());
      }
    },
    activDate(date, e) {
      console.log(date);
      this.idArr.push(date);
      if (e) {
        e.target.classList.add("active");
      } else {
        this.$refs[date][0].classList.add("active");
      }
      console.log(this.idArr);
      this.date = `${this.year} / ${this.month + 1} / ${date}`;

      if (this.idArr.length > 1) {
        this.clearActiveDate();
      }
    },
    clearActiveDate() {
      if (this.idArr.length !== 0) {
        let active = document.querySelectorAll(".active");
        active.forEach(element => {
          if (+element.dataset.id === this.idArr[0]) {
            element.classList.remove("active");
          }
        });
        this.idArr.splice(0, 1);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.lang,
.date {
  width: 305px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  input {
    margin: 0 10px;
  }
}
.calendar {
  width: 305px;
  background-color: #fff;
  border: 1px grey solid;
  .month {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      margin: 10px;
    }
  }
  .weekdays {
    display: flex;
    align-items: center;
    .weekday {
      width: 45px;
      margin: 10px;
    }
  }
  .days {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .day {
      width: 43px;
      padding: 10px;
      margin: 10px 0;
      cursor: pointer;
    }
    .active {
      box-sizing: border-box;
      padding: 9px;
      border: 1px rgb(75, 75, 253) solid;
    }
  }
}
</style>