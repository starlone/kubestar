import * as vue from 'vue';

import html from "./home.html";

declare global { interface Window { service: any; } }

export const home = vue.defineComponent({
    name: "Hello",
    template: html,
    data() {
        return {
            namespace: '',
            pods: []
        }
    },
    methods: {
        async onSubmit() {
            const resp = await window.service.getPods(this.namespace);
            this.pods = resp.items;
            console.log(resp.items);
        },
    },
});