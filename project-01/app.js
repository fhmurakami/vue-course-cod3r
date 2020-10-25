new Vue({
  el: "#app",
  data: {
    playerLife: 100,
    monsterLife: 100,
    gameStarted: false,
    playerAttack: {
      min: 5,
      max: 10,
    },
    monsterAttack: {
      min: 7,
      max: 12,
    },
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
      this.damage("monsterLife", this.playerAttack, type);
      this.damage("playerLife", this.monsterAttack);
    },
    heal() {
      const playerHeal = {
        min: 10,
        max: 15,
      };
      const heal = this.getRandom(playerHeal.min, playerHeal.max)

      this.playerLife += heal 
      this.damage("playerLife", this.monsterAttack)
      this.playerLife = Math.min(this.playerLife, 100);
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
