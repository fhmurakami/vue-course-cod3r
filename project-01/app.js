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
      playerAttack = {
        min: 5,
        max: 10,
      };

      monsterAttack = {
        min: 7,
        max: 12,
      };

      this.damage("monsterLife", playerAttack, type);
      this.damage("playerLife", monsterAttack);
    },
    damage(target, attack, type = "normal") {
      const bonus = type == "special" ? 5 : 0;
      const damage = this.getRandom(attack.min + bonus, attack.max + bonus);

      this[target] = Math.max(this[target] - damage, 0);
    },
    getRandom(min, max) {
      return Math.round(Math.random() * (max - min + 1)) + min;
    },
  },
  watch: {
    hasResult(value) {
      if (value) this.gameStarted = false;
    },
  },
});
