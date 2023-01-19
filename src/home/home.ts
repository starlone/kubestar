import * as vue from 'vue';

import html from "./home.html";

declare global { interface Window { service: any; } }

function autoRefresh(comp: any) {
    setTimeout(() => {
        if (comp.hasAutorefresh) {
            comp.onSubmit();
        }
        autoRefresh(comp);
    }, 10000);
}

export const home = vue.defineComponent({
    name: "Hello",
    template: html,
    data() {
        autoRefresh(this)
        console.log(self);
        return {
            namespace: '',
            pods: [],
            loading: false,
            hasAutorefresh: false,
        }
    },
    methods: {
        async onSubmit() {
            this.loading = true;
            const resp = await window.service.getPods(this.namespace);
            this.loading = false;
            this.pods = resp.items;
            console.log(resp.items);
        },
    },
});
