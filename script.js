const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  computed: {
    fullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "schwarzmuller";
    },
  },
  methods: {
    add(number) {
      this.counter = this.counter + number;
    },
    reduce(number) {
      this.counter = this.counter - number;
    },
    setName(event) {
      this.name = event.target.value;
    },
    resetInput() {
      this.name = "";
    },
    outputFullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "schwarzmuller";
    },
  },
});
app.mount("#events");
