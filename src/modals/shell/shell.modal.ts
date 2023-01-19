import * as vue from 'vue';

import terminal from "../../components/terminal/terminal.component";
import html from "./shell.modal.html";

declare global { interface Window { service: any; } }

export default vue.defineComponent({
    name: "ModalShell",
    template: html,
    components: { terminal },
    data() {
        return {
        }
    },
});
