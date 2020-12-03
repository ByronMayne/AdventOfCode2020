var path = require('path');


export default class Session {
  sessionName: string; 
  sourceDir: string;

  constructor(sessionName: string) {
    this.sessionName = path.basename(sessionName);
    this.sourceDir = path.resolve(__dirname, "..", "src", this.sessionName);
  }

  public getInputPath():string {
    return path.resolve(this.sourceDir, "input.txt");
  }
}