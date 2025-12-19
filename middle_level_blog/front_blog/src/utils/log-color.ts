import { styleText } from 'util';

export function logColor(...msg: (string | number)[]) {
  const mesages = msg
    .map(m => styleText(['bgGreen', 'whiteBright'], `${m}`))
    .join(' ');
  console.log(mesages);
}
