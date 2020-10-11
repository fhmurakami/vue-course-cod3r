new Vue({
  el: "#desafio",
  data: {
    value: "",
  },
  methods: {
    showAlert() {
      alert("WARNING!");
    },
    updateValue(event) {
        this.value = event.target.value
    }
  },
});
