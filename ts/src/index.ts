
let text = Error;

class Animate {

  public version: any = 1.54;
  public owner: any = 'root';
  public config: any;
  public clip: any;

  constructor (config = {}) {
    this.config = config;
    this.clip = new Clip({}, () => {});
  }

}
