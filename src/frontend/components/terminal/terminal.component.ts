import * as vue from 'vue';
import { Terminal } from 'xterm';

import service from '../../service'
import html from "./terminal.component.html";

const term = new Terminal();

term.onData((data: string) => {
    service.write(data);
});

term.onResize(size => {
    console.log(size);
    // ptyProc.resize(
    //     Math.max(size ? size.cols : term.cols, 1),
    //     Math.max(size ? size.rows : term.rows, 1)
    // );
});

service.onPodData((_event:any, data: any) => {
    console.log(data);
    term.write(data);
});

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
