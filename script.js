const output = document.getElementById('output');
const form = document.getElementById('cmd-form');
const input = document.getElementById('cmd');

const data = {
  name: '0xZKc0de',
  title: 'Full-stack developer & privacy-focused hacker',
  about: `I build fast, reliable web apps and developer tooling. I enjoy Rust, Node.js, and cryptography.\n
I like clean abstractions and readable code.`,
  projects: [
    {name: 'zk-wallet', desc: 'A privacy-preserving wallet demo (Rust + WASM) — github.com/0xZKc0de/zk-wallet'},
    {name: 'fast-api', desc: 'Small, high-performance REST API with TypeScript and Deno — github.com/0xZKc0de/fast-api'},
  ],
  skills: ['Rust','TypeScript','Node.js','Deno','WebAssembly','Cryptography','Linux','Docker']
};

const commands = {
  help() {
    return `Available commands:\nhelp — show this message\nabout — who I am\nprojects — list projects\nskills — list skills\ncontact — contact options\nresume — link to resume\nclear — clear the terminal`;
  },
  about() { return data.about },
  projects() { return data.projects.map(p=>`- ${p.name}: ${p.desc}`).join('\n') },
  skills() { return data.skills.join(', ') },
  contact() { return 'Email: hello@example.com\nGitHub: https://github.com/0xZKc0de' },
  resume() { return 'Resume: https://example.com/resume.pdf' },
  clear() { output.innerHTML = ''; return '' }
};

function print(text, className){
  if(!text) return;
  const node = document.createElement('div');
  if(className) node.className = className;
  node.textContent = text;
  output.appendChild(node);
  output.scrollTop = output.scrollHeight;
}

function runCommand(raw){
  const cmd = raw.trim();
  if(!cmd) return;
  print(`$ ${cmd}`, 'cmd');
  const [name, ...rest] = cmd.split(/\s+/);
  const fn = commands[name.toLowerCase()];
  if(!fn){
    print(`command not found: ${name}`, 'muted');
    return;
  }
  const res = fn(rest.join(' '));
  if(res) print(res);
}

form.addEventListener('submit', e=>{
  e.preventDefault();
  runCommand(input.value);
  input.value = '';
});

// start message
print('Welcome to the terminal portfolio. Type \"help\" to get started.');
