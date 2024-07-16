### use strict

- "use strict" need to define the top of script.
- Avoid unnecessary coding mistakes.

```javascript
name = "wxyz"; // Without strict mode don't see any issues.

("use strict");
name = "wxyz"; // With strict mode it will show error in compile time.
```

## Object

- Object store properties (key-value pairs), Property keys must be strings or symbols (usually strings) and Values can be of any type.
- To access the data: obj.property or obj["property"].
- To delete a property: delete obj.prop.
- To check if a property with the given key exists: "key" in obj.
- To iterate over an object: for (let key in obj) loop.

### Object references and copying

- To clone the object we can use Object.assign()
- To clone the nested objects we can use structuredClone().

```javascript
const obj1 = {
  name: "xyz",
  measure: {
    height: 6,
    weight: 80,
  },
};
const obj2 = obj1; // copy the reference
obj2 === obj1; // true, same reference.

const obj3 = Object.assign({}, obj1); // Not copy the reference
obj1 === obj3; // false

obj3.measure === obj1.measure;
// true, because obj3.measure is an object and will be copied by reference Object.assign() will not work for nested objects.

const obj4 = structuredClone(obj1);
obj4.measure === obj1.measure; // false, structuredClone will clone nested objects also.
```

### Constructor function

- Constructor functions technically are regular functions.
- They are named with capital letter first.
- They should be executed only with "new" operator.

```javascript
function User(firstName, lastName, isAdmin) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.isAdmin = isAdmin;
  this.fullName = function () {
    return this.firstName + this.lastName;
  };
  this.verifyRole = () => {
    return this.isAdmin ? "Admin" : "Normal";
  };
}

const user = new User("Vamsi", "Krishna", true);
// const user = new User();
// user.firstName = "Vamsi";
// user.lastName = "Krishna";
// user.isAdmin = true;
const fullName = user.fullName();
const role = user.verifyRole();
```

### Optional chaining

- The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.
- obj?.prop – returns obj.prop if obj exists, otherwise undefined.
- obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
- obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.

### Property flags and descriptors

- **writable:** if true, the value can be changed, otherwise it’s read-only.
- **enumerable:** if true, then listed in loops, otherwise not listed.
- **configurable:** if true, the property can be deleted and these attributes can be modified, otherwise not.

```javascript
const obj1 = {
  firstName: "Vamsi",
  lastName: "Krishna",
  phoneNo: 1234576,
  email: "xyz@gmail.com",
  password: "xyz",
};

Object.defineProperty(obj1, "age", {
  value: 30, // Add a new property to obj.
});

Object.defineProperty(obj1, "email", {
  writable: false, // Can't change the property value.
});

Object.defineProperty(obj1, "phoneNo", {
  configurable: false, // Can't delete the property.
});

Object.defineProperty(obj1, "password", {
  enumerable: false, // Hide the property and value.
});

obj1.email = "abc@gmail.com";
delete obj1.phoneNo;

// {
//   firstName: 'Vamsi',
//   lastName: 'Krishna',
//   phoneNo: 1234576,
//   email: 'xyz@gmail.com'
// }

const details = Object.getOwnPropertyDescriptor(obj1, "firstName");
// {
//   value: 'Vamsi',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
```

### Property getters and setters

- **get:** A function without arguments, that works when a property is read.
- **set:** A function with one argument, that is called when the property is set.

```javascript
const user = {
  firstName: "Vamsi",
  lastName: "Krishna",
  age: "",
  get getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set setAge(value) {
    this.age = new Date().getFullYear() - value.getFullYear();
  },
};

user.setAge = new Date("07/15/1993");
user.getFullName; // Vamsi Krishna

// {
//   firstName: 'Vamsi',
//   lastName: 'Krishna',
//   age: 31,
//   getFullName: [Getter],
//   setAge: [Setter]
// }
```

## Advanced working with functions

### Recursion

- Recursion means calling a function from itself.
- When a function calls itself, that’s called a recursion step.

```javascript
let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function totalSalary(company) {
  let sum = 0;
  if (typeof company === "object") {
    for (data of Object.entries(company)) {
      if (data[0] === "salary") return data[1];
      else sum += totalSalary(data[1]);
    }
    return sum;
  }
}
const total = totalSalary(company);
```

### Rest parameters and Spread

```javascript
const obj1 = {
  firstName: "vamsi",
  age: 30,
};
const obj2 = {
  lastName: "krishna",
  email: "xyz@gamil.com",
};
const obj3 = { ...obj1, ...obj2 };
// { firstName: 'vamsi', age: 30, lastName: 'krishna', email: 'xyz@gamil.com' }

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
// [ 1, 2, 3, 4, 5, 6 ]

const str = "Hello";
const data = [...str]; // [ 'H', 'e', 'l', 'l', 'o' ]

function sum(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
const result = sum(...nums);
```

```javascript
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
const result = sum(1, 2, 3);
```
