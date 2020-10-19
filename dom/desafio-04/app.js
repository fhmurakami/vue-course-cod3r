new Vue({
  el: "#desafio",
  data: {
    changeClass: false,
		cssClass: '',
		rotate: false,
		input1: '',
		input2: '',
		defaultStyle: {
			width: '100px',
			height: '100px'
		},
		progressStyle: {
			width: '0%'
		}
  },
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.changeClass = !this.changeClass;
      }, 1000);
    },
    iniciarProgresso() {
			width = 0
			let progress = setInterval(() => {
				width += 10
				this.progressStyle = {
					width: `${width}%`
				}
				if (width >= 100) {
					clearInterval(progress)
				}
			}, 500)
		},
		inputClass(event) {
			if (event.target.value == 'true') {
				this.rotate = true
			} else if (event.target.value == 'false') {
				this.rotate = false
			}
		}
	},
	computed: {
		myClass() {
			return {
				destaque: this.changeClass,
				encolher: !this.changeClass
			}
		}
	}
});
