# TypeScript
- TypeScript is an object-oriented strongly typed language, which is a supports JavaScript.
- TypeScript code is converted to JavaScript,
- TypeScript runs on any browser or JavaScript engine.
- Reduced number of bugs in production.
- Improve scalability.
- Code maintainability.
- Good for large scale applications.

## DataTypes
```typescript
let msg: string = "message";
let num: number = 123;
let flag: boolean = true;
let notDefined: undefined = undefined;
let nullCheck: null = null;
let star: symbol = Symbol("star");
let largeNum: bigint = 24n;

let numArray: number[] = [1, 2, 3];
let stringArray: string[] = ["one", "two", "three", "four"];
let tupleCollection: [number, string] = [1, "one"];

type PersonType = { name: string; age: number };
let personDetails: PersonType = {
  name: "Vamsi",
  age: 30,
};
```
### Access modifiers
- private: Access same class.
- protected: Access same class and inherited class.
- public: Access any every.

## Operators
- in
- 
### Rest Parameter
- Function that can accept an unknown number of arguments or varying the arguments we can use Reset parameter.
```typescript
function buildName(firstName: string, ...restOfName: string[]) {
  return `${firstName} ${restOfName.join(' ')}`;
}
const fullName = buildName('John', 'Doe', 'Smith');
```

### tsconfig.json
We can specify the different options to tell the compiler how to compile a given project.
