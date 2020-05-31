console.log('interfaces - describes how object looks like');


// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
}


interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable  extends Named {
  greet(text: string) : void;
}


class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    this.name = n;
  }

  greet(text: string) {
    if(this.name) {
      console.log(text + ' ' + this.name);
    }
  }


}


//tests
let user1 = new Person('Mauricio');
user1.greet('Hello world');




