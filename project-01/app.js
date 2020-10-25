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
    playerLog: {
      source: 'Player',
      target: 'Monster',
      class: 'player'
    },
    monsterLog: {
      source: 'Monster',
      target: 'Player',
      class: 'monster'
    },
    logs: [],
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
      this.damage("monsterLife", this.playerAttack, this.playerLog, type);

      if (this.monsterLife > 0) {
        this.damage("playerLife", this.monsterAttack, this.monsterLog);
      }
    },
    heal() {
      const playerHeal = {
        min: 10,
        max: 15,
      };
      const heal = this.getRandom(playerHeal.min, playerHeal.max);

      this.playerLife += heal;
      this.damage("playerLife", this.monsterAttack, this.monsterLog);
      this.playerLife = Math.min(this.playerLife, 100);
      this.registerLog(`Player healed ${heal} of life.`, 'player')
    },
    damage(target, attack, logAttributes, type = "normal") {
      const bonus = type == "special" ? 5 : 0;
      const damage = this.getRandom(attack.min + bonus, attack.max + bonus);

      this[target] = Math.max(this[target] - damage, 0);
      this.registerLog(
        `${logAttributes.source} caused ${damage} of damage on ${logAttributes.target}.`,
        logAttributes.class
      );
    },
    getRandom(min, max) {
      return Math.round(Math.random() * (max - min + 1)) + min;
    },
    registerLog(text, logClass) {
      this.logs.unshift({ text, logClass });
    },
  },
  watch: {
    hasResult(value) {
      if (value) this.gameStarted = false;
    },
  },
});
