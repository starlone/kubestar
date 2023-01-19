import * as vue from 'vue';

import html from "./home.html";

export const home = vue.defineComponent({
    name: "Hello",
    template: html,
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