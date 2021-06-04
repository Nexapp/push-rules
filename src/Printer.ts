/* eslint-disable no-console */
import colors from 'colors';

class Printer {
  static log(text: string) {
    console.log(text);
  }

  static warn(text: string) {
    console.log(colors.yellow(text));
  }

  static error(text: string) {
    console.log(colors.red(text));
  }

  static info(text: string) {
    console.log(colors.blue(text));
  }

  static special(text: string) {
    console.log(colors.magenta(text));
  }
}

export default Printer;
