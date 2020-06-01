# Advanced types

## Function overload
```
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
```

## Nullish
```
const userInput = undefined;
const storedData = userInput ?? 'Default';
console.log('storedData..: ', storedData);
```

## Type Guads

### Interfaces
```
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
```



### Types
```
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

```
