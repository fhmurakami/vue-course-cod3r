new Vue({
  el: "#app",
  data: {
    playerLife: 100,
    monsterLife: 100,
    gameStarted: false
  },
  computed: {
    hasResult() {
      return this.monsterLife <= 0 || this.playerLife <= 0
    }
  },
  methods: {
    startGame() {
      this.gameStarted = true
    }
  },
  watch: {}
});
