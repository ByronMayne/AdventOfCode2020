import fs = require('fs');
import Session from "../Session";

const session: Session = new Session(__dirname);

const run = async () => {
  const filePath: string = session.getInputPath();
  const data = fs.readFile(filePath, "utf-8", (error, data) => {

    const lines: Array<number> = data.split(/\r?\n/).map(line => +line);
    const count: number = lines.length;

    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        let xValue = lines[x];
        let yValue = lines[y];
        if (xValue + yValue == 2020) {
          console.log(xValue * yValue);
        }
      }
    }
  });
}

run();