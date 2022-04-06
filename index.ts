class Action {
  private actions: Array<string>;
  constructor() {
    this.actions = [];
  }
  run() {
    this.actions.forEach((action) => {
      console.log('action:', action);
    });
    return this;
  }
}

export default Action;
