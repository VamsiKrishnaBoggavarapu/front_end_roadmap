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

```javascript
let obj1 = { user };
let obj2 = obj1; // copy the reference

alert( obj1 === obj2 ); // true, Same reference 
```
