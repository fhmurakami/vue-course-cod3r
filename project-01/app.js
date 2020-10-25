new Vue({
  el: "#app",
  data: {
    playerLife: 100,
    monsterLife: 100,
    gameStarted: false,
  },
  computed: {
    hasResult() {
      return this.monsterLife <= 0 || this.playerLife <= 0;
    },
  },
  methods: {
    startGame() {
      this.gameStarted = true;
      this.playerLife = 100;
      this.monsterLife = 100;
    },
    endGame() {
      this.gameStarted = false;
    },
    attack(type = "normal") {
      let playerMin;
      let playerMax;
      if (type == "special") {
        playerMin = 10;
        playerMax = 20;
      } else {
        playerMin = 5;
        playerMax = 15;
      }

      let monsterMin = 5;
      let monsterMax = 20;

      let playerAttack =
        Math.floor(Math.random() * (playerMax - playerMin + 1)) + playerMin;
      let monsterAttack =
        Math.floor(Math.random() * (monsterMax - monsterMin + 1)) + monsterMin;

      this.monsterLife -= playerAttack;

      if (this.monsterLife <= 0) {
        this.monsterLife = 0;
        this.gameStarted = false;
      }

      this.playerLife -= monsterAttack;

      if (this.playerLife <= 0) {
        this.playerLife = 0;
        this.gameStarted = false;
      }
    },
  },
  watch: {},
});
