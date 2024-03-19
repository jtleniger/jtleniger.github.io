import watch from 'node-watch';
import { execSync } from 'child_process';

function debounce(func, timeout){
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

const build = debounce(() => {
  console.log("building...\n")

  console.time("took")

  try {
    execSync("pnpm build", { stdio: 'inherit' })
  } catch (error) {
    console.error(error.message)
  }

  console.log()
  console.timeEnd("took")
}, 1000)


watch(['site', 'scss'], { recursive: true }, build);

