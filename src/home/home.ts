import * as vue from 'vue';

export const home = vue.defineComponent({
    name: "Hello",
    template: "Oi {{message}}",
    data() {
        return {
            message: "Hello World"
        }
    },
    methods: {
        async onSubmit() {
            // const namespace = document.getElementById("namespace").value;
            // const resp = await window.service.getPods(namespace);
            // this.pods = resp.items;
            // console.log(resp.items);
        },
    },
});