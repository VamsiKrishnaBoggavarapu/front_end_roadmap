# ReactJS
- React is open-source javascript library for build user interfaces.
- Improved performance: React uses a virtual DOM to keep track of changes to the UI. When a component's state changes, React updates the virtual DOM. The virtual DOM is then compared to the real DOM, and the real DOM is updated only if necessary. This makes React applications very efficient.
- Resuable components: Components are the building blocks of React applications. A component is a piece of code that encapsulates HTML, CSS, and JavaScript. Components can be nested inside other components to create complex UIs.
- Unidirectional data flow: React follows a unidirectional data flow.

## React Hooks
- React-Hooks will help the developer job easier.
### UseState hook
- UseState hook add a state variable to the component.
- UserState accept one parameter, that can set initail state.
- UserState return an array of two values, Current state and set function.
```typescript
const [msg, setMsg] = useState("Hello");
function updateMsg(): void {
    setMsg("Welcom");
}
```
### UseEffect hook
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
### UseContext hook
### UseReducer hook
### UseRef hook
### UseCallback hook
### UseMemo hook
### Custom hooks

## React Routing

## React Redux
