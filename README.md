# TypeScript
- TypeScript is an object-oriented strongly typed language, which is a supports JavaScript.
- TypeScript code is converted to JavaScript,
- TypeScript runs on any browser or JavaScript engine.
- Reduced number of bugs in production.
- Improve scalability.
- Code maintainability.
- Good for large scale applications.

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
