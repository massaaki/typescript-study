console.log('starting app.ts...');


type Admin = {
  name: string;
  privileges: string[];
};


type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee= {
  name: 'Mauricio',
  privileges: ['publish'],
  startDate: new Date()
}



type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;


//overloads example
function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: number, b: string): string
function add(a: string, b: number): string
function add(a: Combinable, b: Combinable)  {
  if(typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a+b;
}

const result = add('string 01', 'string 02');
result.split(' ');


//optional chaning operator
const fetchedUserData = {
  id: '123',
  name: 'Mauricio',
  job: { title: 'CTO', description: 'Some Description'}
}
// console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log(fetchedUserData?.job?.title);



const userInput = undefined;
const storedData = userInput ?? 'Default';
console.log('storedData..: ', storedData);


//Guard Example
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ', emp.name);

  if('privileges' in emp) {
   console.log('Privileges: ', emp.privileges);
  }

  if('startDate' in emp) {
    console.log('StartDate', emp.startDate);
  }
}

printEmployeeInformation(e1);




class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...', amount);
  }
  
}


type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {

  vehicle.drive();
  

  // if('loadCargo' in vehicle) {
  if(vehicle instanceof Truck) {
    vehicle.loadCargo(123);
  }

}

useVehicle(v1);
useVehicle(v2);



//Interfaces
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {

  // if('flyingSpeed' in animal) {
  //   console.log('moving with speed ', animal.flyingSpeed);
  // }

  // if('runningSpeed' in animal) {
  //   console.log('moving with speed', animal.runningSpeed);
  // }

  let speed;
  switch(animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }

  console.log('Speed..: ', speed);
}


moveAnimal({type: 'bird', flyingSpeed: 32});
moveAnimal({type: 'horse', runningSpeed: 15});


// const paragraph = document.getElementById('message-output');
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input') as HTMLInputElement;

if(userInputElement) {
  userInputElement.value = 'Hello World!';
}



interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must Start with a capital chacacter'
};