const output = document.getElementById('output');
const form = document.getElementById('cmd-form');
const input = document.getElementById('cmd');
const root = document.documentElement;

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
  resume() { return '<a href="https://example.com/resume.pdf" target="_blank">Download resume</a>' },
  clear() { output.innerHTML = ''; return '' },
  theme(arg){
    const t = arg.trim().toLowerCase();
    if(!t) return 'themes: dark, light, green';
    if(t==='light') root.classList.add('theme-light'), root.classList.remove('theme-green');
    else if(t==='green') root.classList.add('theme-green'), root.classList.remove('theme-light');
    else root.classList.remove('theme-light','theme-green');
    return `theme set: ${t || 'dark'}`;
  }
};

function renderHTML(html){
  const node = document.createElement('div');
  node.className = 'typing';
  node.innerHTML = html;
  output.appendChild(node);
  output.scrollTop = output.scrollHeight;
}

function print(text, className, opts={type:false}){
  if(!text) return;
  if(opts.type){
    typewriter(text, className);
    return;
  }
  const node = document.createElement('div');
  if(className) node.className = className;
  node.textContent = text;
  output.appendChild(node);
  output.scrollTop = output.scrollHeight;
}

function typewriter(text, className){
  const node = document.createElement('div');
  if(className) node.className = className;
  output.appendChild(node);
  let i = 0;
  function step(){
    node.textContent = text.slice(0,i++);
    output.scrollTop = output.scrollHeight;
    if(i<=text.length) requestAnimationFrame(step);
  }
  step();
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
  if(!res) return;
  // if result looks like HTML, render it
  if(/<[a-z][\s\S]*>/i.test(res)) renderHTML(res);
  else print(res, null, {type:true});
}

// command history and completion
let history = [];
let histPos = -1;

form.addEventListener('submit', e=>{
  e.preventDefault();
  const val = input.value;
  if(!val.trim()) return input.value = '';
  history.push(val);
  histPos = history.length;
  runCommand(val);
  input.value = '';
});

input.addEventListener('keydown', e=>{
  if(e.key==='ArrowUp'){
    if(histPos>0) histPos--;
    input.value = history[histPos] || '';
    e.preventDefault();
  } else if(e.key==='ArrowDown'){
    if(histPos<history.length-1) histPos++;
    else histPos = history.length;
    input.value = history[histPos] || '';
    e.preventDefault();
  } else if(e.key==='Tab'){
    e.preventDefault();
    // simple tab completion
    const cur = input.value.trim();
    const keys = Object.keys(commands).filter(k=>k.startsWith(cur));
    if(keys.length===1) input.value = keys[0] + ' ';
    else if(keys.length>1) print(keys.join('\t'));
  }
});

// clickable links open in new tab when clicked inside output
output.addEventListener('click', e=>{
  const a = e.target.closest('a');
  if(a) a.target = '_blank';
});

// mouse playground wiring
const icons = document.querySelectorAll('.icon');
icons.forEach(b=>{
  b.addEventListener('click', ()=>{
    const cmd = b.getAttribute('data-cmd');
    // simulate entering command
    history.push(cmd);
    histPos = history.length;
    runCommand(cmd);
  });
});

// sidebar wiring
const sideButtons = document.querySelectorAll('.side-btn');
sideButtons.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const cmd = btn.getAttribute('data-cmd');
    // set active state
    sideButtons.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    // run command
    history.push(cmd);
    histPos = history.length;
    runCommand(cmd);
  });
});

// cursor follow inside play-area
const playArea = document.querySelector('.play-area');
const cursorDot = document.querySelector('.cursor-dot');
if(playArea && cursorDot){
  playArea.addEventListener('pointermove', e=>{
    const rect = playArea.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cursorDot.style.left = x + 'px';
    cursorDot.style.top = y + 'px';
  });
  playArea.addEventListener('pointerleave', ()=>{
    cursorDot.style.left = '50%';
    cursorDot.style.top = '50%';
  });
}

// start message
print('Welcome to the terminal portfolio. Type \"help\" to get started.');
