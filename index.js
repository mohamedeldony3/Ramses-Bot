import { join, dirname } from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { setupMaster, fork } from 'cluster';
import cfonts from 'cfonts';
import readline from 'readline';
import yargs from 'yargs';
import chalk from 'chalk'; 
import fs from 'fs'; 
import './config.js';

const { PHONENUMBER_MCC } = await import('@whiskeysockets/baileys');
const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(__dirname);
const { say } = cfonts;
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let isRunning = false;

const question = (texto) => new Promise((resolver) => rl.question(texto, resolver));

console.log(chalk.red.bold('⧗ Loading Starting ...'));

function verificarOCrearCarpetaAuth() {
  const authPath = join(__dirname, global.authFile);
  if (!fs.existsSync(authPath)) {
    fs.mkdirSync(authPath, { recursive: true });
  }
}

function verificarCredsJson() {
  const credsPath = join(__dirname, global.authFile, 'creds.json');
  return fs.existsSync(credsPath);
}

function formatearNumeroTelefono(numero) {
  let formattedNumber = numero.replace(/[^\d+]/g, '');
  if (formattedNumber.startsWith('+20') && !formattedNumber.startsWith('+201')) {
    formattedNumber = formattedNumber.replace('+20', '+201');
  } else if (formattedNumber.startsWith('20') && !formattedNumber.startsWith('201')) {
    formattedNumber = `+201${formattedNumber.slice(2)}`;
  } else if (formattedNumber.startsWith('20') && formattedNumber.length >= 12) {
    formattedNumber = `+${formattedNumber}`;
  } else if (!formattedNumber.startsWith('+')) {
    formattedNumber = `+${formattedNumber}`;
  }
  return formattedNumber;
}

function esNumeroValido(numeroTelefono) {
  const numeroSinSigno = numeroTelefono.replace('+', '');
  return Object.keys(PHONENUMBER_MCC).some(codigo => numeroSinSigno.startsWith(codigo));
}

async function start(file) {
  if (isRunning) return;
  isRunning = true;

  say('\n\nRamses\nBot\n\n', {
    font: 'block',
    align: 'center',
    gradient: ['blue', 'cyan'],
    colors: ['yellow', 'green'],
    space: true,
    letterSpacing: 1,
    lineHeight: 2,
  });

  say('Created By\nThe End Team\n\n', {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta'],
    colors: ['yellow', 'green'],
    space: true,
    letterSpacing: 1,
    lineHeight: 1,
  });

  verificarOCrearCarpetaAuth();

  if (verificarCredsJson()) {
    const args = [join(__dirname, file), ...process.argv.slice(2)];
    setupMaster({ exec: args[0], args: args.slice(1) });
    const p = fork();
    return;
  }

  const opcion = await question(chalk.yellowBright.bold('\n┌「 Select an option 」─────────┈ ⳹\n') + chalk.yellowBright.bold('│✑ ') + chalk.white.bold('1- Code QR\n') + chalk.yellowBright.bold('│✑ ') +  chalk.white.bold('2- Code 8 Numbers\n') + chalk.yellowBright.bold('└─────────┈ ⳹\n\n'));

  let numeroTelefono = '';
  if (opcion === '2') {
    const phoneNumber = await question(chalk.yellowBright.bold('\n┌「 Add your number 」─────────┈ ⳹\n') + chalk.yellowBright.bold('│✑ Example : ') + chalk.white.bold('+201145624848\n') + chalk.yellowBright.bold('└─────────┈ ⳹\n\n'));
    numeroTelefono = formatearNumeroTelefono(phoneNumber);
    if (!esNumeroValido(numeroTelefono)) {
      console.log(chalk.bgRed('\n┌「 Error your number 」─────────┈ ⳹\n') + chalk.bgRed('│✑ ') + chalk.white.bold('Check the number and try again.\n') + chalk.bgRed('└─────────┈ ⳹\n\n'));
      
      process.exit(0);
    }
    process.argv.push(numeroTelefono);
  }

  if (opcion === '1') {
    process.argv.push('qr');
  } else if (opcion === '2') {
    process.argv.push('code');
  }

  const args = [join(__dirname, file), ...process.argv.slice(2)];
  setupMaster({ exec: args[0], args: args.slice(1) });

  const p = fork();

  p.on('message', (data) => {
    console.log(chalk.green.bold('⟷ Message : '), data);
    switch (data) {
      case 'reset':
        p.process.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
      case 'uptime':
        p.send(process.uptime());
        break;
    }
  });

  p.on('exit', (_, code) => {
    isRunning = false;
    console.error(chalk.red.bold('▹⚠◃ Error : '), code);
    p.process.kill();
    isRunning = false;
    start.apply(this, arguments);
    if (process.env.pm_id) {
      process.exit(1);
    } else {
      process.exit();
    }
  });

  const opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
  if (!opts['test']) {
    if (!rl.listenerCount()) {
      rl.on('line', (line) => {
        p.emit('message', line.trim());
      });
    }
  }
}

start('main.js');
