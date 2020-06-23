console.log('Hello')
new Vue({
    el: '#vue-app',
    data: {
        name: 'Patrice Petit',
        age: 20,
        character: "",
        available: false,
        nearby: false,
        toggle: false,
        characters: []
    },
    methods: {
        greet: function (name) {
            console.log(this.name)
            return `Hello ${name}`
        },
        add: function (inc, event) {
            this.age += inc
        },
        sub: function (inc, event) {
            this.age -= inc
        },
        click: function (event) {
            console.log("click on link")
        },
        addCharacter: function () {
            if (this.characters.indexOf(this.character) < 0) {
                this.characters.push(this.character)
                this.character = ""
            }
        },
        deleteCharacter: function (index) {
            this.characters.splice(index, 1)
        }
    },
    computed: {
        addToAge: function () {
            return this.age + 20
        }
    }
})
