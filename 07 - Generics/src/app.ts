// const names: Array<string> = [];

// const promise: Promise<number> = new Promise( (resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// } )

// promise.then(data => {
//   data.toFixed(2);
// })




// function merge<T, U>(objA: T, objB: U) {
// function merge<T extends Person, U extends Person>(objA: T, objB: U) {
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergeObj = merge({name: 'name2'}, {age: 42});
// mergeObj.age
// mergeObj.name



interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Some description here...';
  if(element.length === 1) {
    descriptionText = '-->' + element.length + ' element.';
  } else if( element.length > 1) {
    descriptionText = '-->' + element.length + ' elements.';
  }


  return [element, descriptionText];
}

console.log(countAndDescribe(['Hello World']));


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value..: ' + obj[key];
}

extractAndConvert({name: 'Teste'}, 'name');






class DataStorage<T extends (string | number | boolean)> {
  private data = [];

  addItem(item) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if(this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item),1);
  }

  getItems() {
    return [...this.data];
  }
}


const textStorage = new DataStorage<string>();
textStorage.addItem('Mauricio');
textStorage.addItem('Mau');
textStorage.removeItem('Mau');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(3);
numberStorage.addItem(5);
numberStorage.addItem(67);
numberStorage.removeItem(5);
console.log(numberStorage.getItems()); 


const objStorage = new DataStorage<object>();
const obj = {name: 'hello'};
objStorage.addItem(obj);
objStorage.addItem({name: 'world'});
objStorage.removeItem(obj);
console.log(objStorage.getItems());


interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}


const names: Readonly<string[]> = ['hello', 'world'];
// names.push('nice');
// names.pop();