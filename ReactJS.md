# ReactJS
- React is open-source javascript library for build user interfaces.
- Improved performance: React uses a virtual DOM to keep track of changes to the UI. When a component's state changes, React updates the virtual DOM. The virtual DOM is then compared to the real DOM, and the real DOM is updated only if necessary. This makes React applications very efficient.
- Resuable components: Components are the building blocks of React applications. A component is a piece of code that encapsulates HTML, CSS, and JavaScript. Components can be nested inside other components to create complex UIs.
- Unidirectional data flow: React follows a unidirectional data flow.

## React Hooks
- React-Hooks will help the developer job easier.
### useState
- UseState hook add a state variable to the component.
- UserState accept one parameter, that can set initail state.
- UserState return an array of two values, Current state and set function.
```javascript
const [msg, setMsg] = useState("Hello");
function updateMsg() {
    setMsg("Welcom");
}
```
### useEffect
- Handle the lifecycle methods in function components (componentDidMount,componentDidUpdate and componentWillUnmount)
- useEffect(setup, dependencies?)
```typescript
useEffect(() => {
    console.log("componentDidMount");
  }, []);

useEffect(() => {
    console.log("componentDidUpdate");
  }, [msg]);

useEffect(() => {
    console.log("componentWillUnmount");
    return () => {
      // Add clean up logic
    };
  }, []);
```
### useContext
- Easy to transfer the data from one component to another component
  ![alt text](https://github.com/VamsiKrishnaBoggavarapu/web_applications_basics/blob/main/useContext.png?raw=true)
```javascript
import React, { createContext, useState } from "react";

export const Context = createContext(false, () => {});

export const ContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Context.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </Context.Provider>
  );
};

```

```javascript
import React, { useContext } from "react";
import { ContextProvider, Context } from "./contextProvider";
import { Landing } from "./pages/Landing";
import { Theme } from "./Theme";
import "./App.css";

const App = () => {
  return (
    <ContextProvider>
      <div>
        <Theme />
        <Landing />
      </div>
    </ContextProvider>
  );
};

export default App;
```

```javascript
import React, { useContext } from "react";
import { Context } from "./contextProvider";

export const Theme = () => {
  const { darkMode, setDarkMode } = useContext(Context);
  return (
    <div style={{ display: "flex" }}>
      <button onClick={() => setDarkMode(!darkMode)}>ChangeTheme</button>
    </div>
  );
};
```

```javascript
import React, { useContext } from "react";
import { Context } from "../contextProvider";
import "../App.css";

export const Landing = () => {
  const { darkMode } = useContext(Context);
  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <h1>Hello</h1>
    </div>
  );
};
```

### useReducer
- useReducer hook help to add a reducer to the component and it can managing more complex state logic.
- Once place to handle state updates.
- const [state,dispatch] = userReducer(reducer, initalArg)
```javascript
import React, { useReducer } from "react";

export const Landing = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return {
          users: [...state.users, { id: Math.random() }],
        };

      case "REMOVE":
        return {
          users: state.users.slice(1),
        };
      default:
        return state;
    }
  };

  const initalArg = { users: [{ id: Math.random() }] };

  const [state, dispatch] = useReducer(reducer, initalArg);

  const update = () => {
    dispatch({ type: "ADD" });
  };

  const remove = () => {
    dispatch({ type: "REMOVE" });
  };
  return (
    <div>
      <button onClick={update}>Add</button>
      <button onClick={remove}>Remove</button>
      {state.users.map((x) => (
        <p>{x.id}</p>
      ))}
    </div>
  );
};

```
### useRef
- Storing mutable values and avoid re-rendering when update the data.
- Storing reference to DOM element and directly do the operations on DOM element.
- const ref = useRef(initialValue)
```javascript
import React, { useEffect, useRef } from "react";

export const FirstPage = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div>
      <input ref={inputRef}></input>
    </div>
  );
};
```
### useCallback & useMemo
- useCallback(function, [dependencies]);
- useMemo(function, [dependencies]);
- useCallback and useMemo are used to cache data to optimize performance.
- useMemo is used to cache values and useCallback is used to cache function definitions, It will avoid un-unessessory re-renders.

```javascript
import React, { useCallback, useState } from "react";

export const FirstPage = () => {
  const [count, setCount] = useState(0);
  // This function is not re-render every state updated
  const cancelClick = useCallback(() => {
    console.log("user clicked button", count);
  }, []);

  // This function is not re-render every time,
  // It will re-render only when count is updating
  const saveClick = useCallback(() => {
    console.log("user clicked button", count);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Increase
      </button>
      <button onClick={cancelClick}>Cancel</button>
      <button onClick={saveClick}>Save</button>
    </div>
  );
};

```
## useSyncExternalStore

### useImperativeHandle

### useLayoutEffect
- useLayoutEffect is execute before the browser repaints the screen.
- useLayoutEffect(setup, dependencies?)
  
### useInsertionEffect

### useDeferredValue

## React Routing

## React Redux
- In a Redux application, middleware is a function that sits between the action and the reducer. It is called with the action and the store’s dispatch and getState functions as arguments. Middleware can be used to perform a variety of tasks, such as making API calls, logging information to the console, or persisting the state of the store.
## Other Feature
### StrictMode
__Find the bugs during development mode.__
```javascript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```
### Fragment
__Fragment will group the elements without a wrapper node. It will avoid unnecessary node.__
```javascript
<>
  <OneChild />
  <AnotherChild />
</>
```
- Profiler: It will measure the rendering performance of applications. Better to avoid this in production, It will impact some performance.
```javascript
<Profiler id="App" onRender={onRender}>
  <App />
</Profiler>

function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  // Aggregate or log render timings...
}
```
### Suspense: 
__Displaying a fallback while content is loading. It' like a placeholder.__
```javascript
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```
### Memo: 
__It will avoid unnecessary re-rendering, It will re-render only memoizedcopoment props are changed.__
```javascript
import React, { memo } from "react";
export const Memo = memo(({ data }) => {
  console.log("Calling Memo! - ", data);
  return <label>{data}</label>;
});

import React, { useState } from "react";
import { Memo } from "./Memo";
export const FirstPage = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("Hello");

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Memo data={data} />
      <button onClick={() => setData(Math.random())}>Save</button>
    </div>
  );
};

```
### Lazy
- 
