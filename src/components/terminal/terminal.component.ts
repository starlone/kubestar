import * as vue from 'vue';
import { Terminal } from 'xterm';

import html from "./terminal.component.html";

declare global { interface Window { service: any; } }

const term = new Terminal();

export default vue.defineComponent({
    name: "Terminal",
    template: html,
    data() {
        return {
        }
    },
    mounted: () => {
        term.open(document.getElementById('terminal'));
        term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
    }
});
