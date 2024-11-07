# Why Are Type Guards Necessary? Types and Use Cases
In TypeScript, type guards are tools that help ensure your code works with the right types of data. They allow you to refine or narrow down the type of a variable during runtime, ensuring that the correct methods and properties are used based on the variable's type.

Without type guards, TypeScript might not know exactly what type a variable is, especially when a variable can hold more than one type. Type guards help solve this by making the type more specific, improving code safety and readability.

## Types of Type Guards:
### 1. typeof Type Guard
### 2. instanceof Type Guard
### 3. User-Defined Type Guards
### 4. in Type Guard



## 1. typeof Type Guard:
The typeof operator is used to check for primitive types like string, number, boolean, etc. It’s useful when working with union types.
#### Example:
function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());  
  } else {
    console.log(value.toFixed(2));   
  }
}
#### Use Case: 
To check if a variable is a string, number, or another primitive.

## 2. instanceof Type Guard:
The instanceof operator checks if an object is an instance of a class or constructor function.
#### Example:
class Dog {
  bark() {
    console.log("Woof!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  }
}
#### Use Case: 
To check if an object is an instance of a particular class.


## 3. User-Defined Type Guards:
You can create your own type guard function to refine types based on custom conditions.
#### Example:
function isDog(pet: Dog | Cat): pet is Dog {
  return (pet as Dog).bark !== undefined;
}
#### Use Case: 
When you need more control over type narrowing, like checking custom properties or conditions.


## 4. in Type Guard:
The in operator checks if an object has a specific property.
#### Example:
function move(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive();  
  } else {
    vehicle.sail(); 
  }
}
#### Use Case: 
To check if an object has a certain property, distinguishing between types.

## Conclusion
Type guards are essential for narrowing types in TypeScript, especially when working with union types or complex objects. They help ensure type safety, avoid errors, and make your code more readable and predictable. Whether you use typeof, instanceof, or custom checks, type guards make sure you're working with the right type at the right time.
