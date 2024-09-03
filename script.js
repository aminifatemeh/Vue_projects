const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  computed: {},
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
  },
});
app.mount("#user-goals");

//v-if
//v-else
//v-else-if
//v-show
//v-for
