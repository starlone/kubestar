import * as pty from 'node-pty';
import * as os from 'os';

const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

const ptyProcess = pty.spawn(shell, [], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.env.HOME,
  env: process.env
});

export default {
  write: async (data: string) => {
    ptyProcess.write(data);
  },
  onData: ptyProcess.onData
};
