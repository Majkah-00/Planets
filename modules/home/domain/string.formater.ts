interface String {
  format(...args: string[]): string;
}

String.prototype.format = function(...args: string[]): string {

  const lol = () => {
    this.replace(/{(\d+)}/g, (match, paramNumber) => {
      return (typeof args[paramNumber] !== 'undefined') ? args[paramNumber] : match;
    });
  };
  // tslint:disable-next-line:no-unused-expression
  return this.replace(/{(\d+)}/g, (match, paramNumber) => {
    return (typeof args[paramNumber] !== 'undefined') ? args[paramNumber] : match;
  });
};
