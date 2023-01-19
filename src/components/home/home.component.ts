import * as vue from 'vue';

import shell from "../../modals/shell/shell.modal";
import log from "../../modals/log/log.modal";

import html from "./home.component.html";

import { Modal } from 'bootstrap';


declare global { interface Window { service: any; } }

function autoRefresh(comp: any) {
    setTimeout(() => {
        if (comp.hasAutorefresh) {
            comp.onSubmit();
        }
        autoRefresh(comp);
    }, 10000);
}

export default vue.defineComponent({
    name: "Hello",
    template: html,
    components: { shell, log },
    data() {
        autoRefresh(this)
        return {
            namespace: 'nia-triton',
            pods: [],
            loading: false,
            hasAutorefresh: false,
        }
    },
    methods: {
        showShell() {
            const element = document.getElementById('modalShell');
            const myModal = new Modal(element);
            myModal.show();
        },
        showLog() {
            const element = document.getElementById('modalLog');
            const myModal = new Modal(element);
            myModal.show();
        },
        async onSubmit() {
            this.loading = true;
            const resp = await window.service.getPods(this.namespace);
            this.loading = false;
            this.pods = resp.items;
            console.log(resp.items);
        },
    },
});
