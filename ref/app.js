new Vue({
    el: "#vue-app",
    data: {
        output: ''
    },
    methods: {
        readRefs:function() {
            this.output = this.$refs.input.value
            this.$refs.div.innerText = this.output
        }
    }

});
