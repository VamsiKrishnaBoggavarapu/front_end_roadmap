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
