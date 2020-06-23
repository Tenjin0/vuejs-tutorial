console.log('Hello')
new Vue({
    el: '#vue-app',
    data: {
        health: 0,
    },
    methods: {
        punch: function () {
            if (this.health > 0)
                this.health -= 10
        },
        restart: function () {
            this.health = 100
        }
    },
    computed: {
        hasEnded() {
            return this.health === 0
        }
    }
})
