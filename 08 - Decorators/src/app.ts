function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  return function(_: Function) {
    const hookEl = document.getElementById(hookId);
    console.log('hello');
    if(hookEl) {
      hookEl.innerHTML = template;
    }
  }
}


// @Logger('LOGGING - PERSON')
// @WithTemplate('<h1>Person Object</h1>','app');
@WithTemplate('<h1>Template here</h1>', 'app')
class Person {
  name = 'Mauricio';

  constructor() {
    console.log('constructor...');
  }
}


const person = new Person();

console.log(person);

