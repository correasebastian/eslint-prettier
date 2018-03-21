function hi(param: string) {
    return `${param}`;
}

let x = 'how are you';
// tslint:disable-next-line:no-console
console.log(hi('hola' + x));
