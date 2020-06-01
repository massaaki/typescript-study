# Generics

## function
```
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergeObj = merge({name: 'name2'}, {age: 42});
```