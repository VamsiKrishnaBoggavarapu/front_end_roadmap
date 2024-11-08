# ReactJS

- React is open-source javascript library for build user interfaces.
- Improved performance: React uses a virtual DOM to keep track of changes to the UI. When a component's state changes, React updates the virtual DOM. The virtual DOM is then compared to the real DOM, and the real DOM is updated only if necessary. This makes React applications very efficient.
- Resuable components: Components are the building blocks of React applications. A component is a piece of code that encapsulates HTML, CSS, and JavaScript. Components can be nested inside other components to create complex UIs.
- Unidirectional data flow: React follows a unidirectional data flow.


## Advanced State Management

### Context API with Optimizations: ###
- React’s Context API is a powerful feature for managing state and passing data through the component tree without having to prop-drill from parent to child manually.
- Create a Context: This is done using React.createContext(). It returns a Context object. 
- Provide a Context Value: The Context.Provider component allows you to define the context value that child components can consume. 
- Consume the Context: This can be done using the Context.Consumer component or the useContext hook in functional components.

#### Example ####
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

#### How the Context API Works: ####
- The Context API in React works on the principle of “context propagation.”

- __Context Creation:__ When you create a context using React.createContext(), React internally creates a "context object." This object is designed to carry data and is not tied to any specific component instance.
- __Provider Pattern:__ The Context.Provider component is a special type of React component that takes a value prop and passes it down to all its child components, regardless of the component hierarchy. Internally, React propagates this value down the tree.
- __Consumption:__ The useContext hook (or Context.Consumer in-class components) allows any component in the tree to subscribe to the context's value. Subscription in the React Context API refers to the process by which a component gains access to context values. By subscribing to a context, a component can read its value and re-render whenever the context value changes (e.g., the user logs in or out), all components that consume this context are re-rendered with the new value.
- __Propagation Mechanism:__ React uses a propagation mechanism to pass the context value down the tree without having to explicitly pass props at each level. This is achieved using React’s internal instance tree, ensuring that the context changes are efficiently propagated to only the components that need them. React internally handles the distribution of this value down the component tree. This means any child component, no matter how deeply nested, can access the context value if it subscribes to the context.


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
  ![alt text](https://github.com/VamsiKrishnaBoggavarapu/web_applications_basics/blob/main/images/useContext.png?raw=true)



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

- ![alt text](https://github.com/VamsiKrishnaBoggavarapu/web_applications_basics/blob/main/images/redux_lifecycle.gif?raw=true)
- ![alt text](https://github.com/VamsiKrishnaBoggavarapu/web_applications_basics/blob/main/images/redux-toolkit-architecture.png?raw=true)

### CreateSlice

```javascript
import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    loading: false,
  },

  reducers: {
    showLoader: (state) => {
      state.loading = true;
    },
    stopLoader: (state) => {
      state.loading = false;
    },
  },
});

export const { showLoader, stopLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
```

### CreateAsyncThunk

```javascript
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const getProducts = createAsyncThunk("/products", async () => {
  const res = await api({ url: "/products" });
  return res.data;
});

import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsApi";

const productsSlice = createSlice({
  name: "products",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productsSlice.reducer;
```

### Store

```javascript
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import loaderSlice from "./slices/loaderSlice";
import productsSlice from "./features/products/productsSlice";

export const store = configureStore({
  reducer: {
    loader: loaderSlice,
    products: productsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(logger),
  devTools: true,
});
```

### Middleware

**In a Redux application, middleware is a function that sits between the action and the reducer. Middleware can be used to perform a variety of tasks, such as making API calls, logging information to the console, or persisting the state of the store.**

## Other Feature

### StrictMode

**Find the bugs during development mode.**

```javascript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### Fragment

**Fragment will group the elements without a wrapper node. It will avoid unnecessary node.**

```javascript
<>
  <OneChild />
  <AnotherChild />
</>
```

### Profiler

**It will measure the rendering performance of applications. Better to avoid this in production, It will impact some performance.**

```javascript
<Profiler id="App" onRender={onRender}>
  <App />
</Profiler>;

function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  // Aggregate or log render timings...
}
```

### Suspense:

**Displaying a fallback while content is loading. It' like a placeholder.**

```javascript
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```

### Memo:

**It will avoid unnecessary re-rendering, It will re-render only memoizedcopoment props are changed.**

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
