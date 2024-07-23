## JavaScript Basic

**JavaScript is High-Level Object-Oriented, Multi-Paradigm and dynamic typed programming language. Using JavaScript develop web, mobile and server side applications**

### DataTypes

### Var, Let and Const

### Functions

## JavaScript Execution Process

### JavaScript Engine

### Event Loop

### V8 Engine

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

## CLasses

### Basic classes and Inheritance

```javascript
class Button {
  constructor(text) {
    this.text = text;
  }
  get text() {
    return this._text;
  }
  set text(value) {
    if (value.length > 3) this._text = value;
  }
  styles() {
    console.log("button styles");
  }
  click = () => {
    console.log("button click me");
  };
}

class LinkButton extends Button {
  constructor(name) {
    super(name);
  }
  // Method Override
  styles() {
    console.log("link button styles");
  }
}

class ArrowButton extends Button {
  // Constructor Override
  constructor(name, icon) {
    super(name);
    this.icon = icon;
  }
}
```

### Static Properties and methods

```javascript
class Button {
  constructor(text) {
    this.text = text;
  }

  static type = "button";
  static onFocus = () => {
    console.log("button focus", this.type);
  };
}

class LinkButton extends Button {
  constructor(name) {
    super(name);
  }
  // Method Override
  static onFocus() {
    console.log("link button focus", this.type);
  }
}
```

### Public, Protected and Private properties and methods

```javascript
class Label {
  #defaultColor = "Black";
  #defaultFont = "Arial";
  _fontSize = "10px";
  constructor(text) {
    this.text = text;
  }
}

class H1 extends Label {
  _fontSize = "20px";
  static padding = "10px";
  static margin = "10px";
  constructor(text) {
    super(text);
    console.log(this);
  }
  setPadding() {}
}

class H2 extends Label {
  _fontSize = "18px";
  constructor(text) {
    super(text);
    console.log(this);
  }
}
```

### Extending built-in classes

```javascript
class DataArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}
const num1 = new DataArray(1, 2, 3);
const num2 = new DataArray();
num1.isEmpty(); // false
num2.isEmpty(); // true
```

## Error Handling

- The try...catch construct allows to handle runtime errors.
- It allows to “try” running the code and “catch” errors that may occur in it.
- try block required catch or finally blocks.
- try...catch works synchronously

- Error objects have following properties:

  - **message:** The human-readable error message.
  - **name:** The string with error name (error constructor name).
  - **stack:** The stack at the moment of error creation.

```javascript
try {
  // run this code
} catch (err) {
  // if an error happened, then jump here
  // err is the error object
} finally {
  // do in any case after try/catch
}
```

```javascript
// Global errors
window.onerror = function (message, url, line, col, error) {};
```

```javascript
// Custom errors
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("No property: " + property);
    this.property = property;
  }
}

(() => {
  try {
    throw new ValidationError("Whoops!");
    // throw new PropertyRequiredError("field");
  } catch (err) {
    console.log(err.message); // Whoops!
    console.log(err.name); // ValidationError
    console.log(err.stack); // a list of nested calls with line numbers for each
  }
})();
```

## ProtoType

## Callback, Promises and Async/Await

## Dom Operations

## Storage

### Cookie

- Capacity 4KB.
- Access from any where in browser.
- Manually set the expire date to clear the cookie data.
- Store in browser and server.

```javascript
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  date.toUTCString();
  document.cookie = `${name}=${value}; expires=${date}; path=/`;
}
```

```javascript
function deleteCookie(name) {
  document.cookie = `${name}=${null}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
```

```javascript
function getCookie(name) {
  const cookieArr = document.cookie?.split(";");
  for (let i = 0; i < cookieArr.length; i++) {
    let cookie = cookieArr[i].split("=");
    if (cookie[0].trim() === name) {
      return cookie[1];
    }
  }
}
```

### Session Storage

- Capacity 5MB.
- Access only current tab in browser.
- Once close the tab session data will cleared.
- Store in browser.

```javascript
window.sessionStorage.setItem("userName", "vamsi");
window.sessionStorage.getItem("userName");
```

### Local Storage

- Capacity 10MB.
- Access from any where in browser.
- Never clear the local storage data. Programmatically need to clear the data.
- Store in browser.

```javascript
window.localStorage.setItem("email", "vamsi@gmail.com");
let email = window.localStorage.getItem("email");
window.localStorage.removeItem("email");
window.localStorage.clear();
```

## Other

### use strict

**"use strict" need to define the top of script. Avoid unnecessary coding mistakes.**

```javascript
name = "vamsi"; // Without strict mode don't see any issues.

("use strict");
name = "vamsi"; // With strict mode it will show error in compile time.
```

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
