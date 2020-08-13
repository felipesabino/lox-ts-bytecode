import readline from 'readline';
import fs from 'fs';

let runPrompt = () => {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  rl.prompt();
  rl.on('line', function(line){
      run(line);
      rl.prompt();
  })
}

let runFile = (path: string) => {
  let file = fs.readFileSync(path);

  run(file);
}

let run = (source: string | Buffer) => {
  console.log(`code: ${source}`);
}

if (process.argv) {
  if(process.argv.length == 2) runPrompt();
  else if(process.argv.length == 3) runFile(process.argv[2]);
  else {
    console.error("usage: tslox [script]");
    process.exit(64);
  }
}
