### 1. List Virtualization
- __Initial Render:__ When your app starts, list virtualization only renders the visible items that fit within the container’s viewable area in the DOM.
- __Scroll Event Handling:__ As the user scrolls through the list, a scroll event is triggered. The virtualization library listens to this event and calculates which items should be visible based on the scroll position.
- __Dynamic Rendering:__ As you scroll, the virtualization library dynamically renders the new visible items while removing off-screen ones. This reduces the amount of rendering required and ensures a smooth and efficient scrolling experience.
- [react-virtualized library](https://www.npmjs.com/package/react-virtualized)

### 2. Lazy Loading Images
- Lazy load images is a technique that allows you to load only images when they are visible in the viewport.
- It can imporve the speed up the initial page load time.
- It can manage the traffic better way.
- [react-lazy-load library](https://www.npmjs.com/package/react-lazy-load)
- Assert sizes should be lower. 

### 3. Memoization
__Memoization is a powerful technique to optimize the performance of your React applications, especially when dealing with expensive calculations and large amount data. It can be memoized the data and avoid unnecessary re-renders.__
- __React.memo():__ This is a higher-order component (HOC) memoizes the entire component. It will stop re-render the components
- __useMemo():__ useMemo() hook memoizes the result. It takes a function and a dependency array as arguments. If the values in the dependency array haven't changed, it returns the cached result instead of recomputing it.
- __useCallback():__ useCallback() hook memoizes callback function. It takes a function and a dependency array as arguments. This is useful when passing callbacks to child components to prevent unnecessary re-renders.
```javascript
import React, { memo, useCallback, useMemo } from 'react';

const ExpensiveComponent = memo(({ prop1, prop2 }) => {
  // ... expensive calculations
  return <div>{/* ... render something */}</div>;
});

const MyComponent = ({ data }) => {
  const computedValue = useMemo(() => {
    // ... expensive calculation using data
  }, [data]);

  return <div>{computedValue}</div>;
};

const ParentComponent = () => {
  const handleClick = useCallback(() => {
    // ... handle click
  }, []);

  return <ChildComponent onClick={handleClick} />;
};
```

### 4. Throttling & Debouncing Events
__Throttling and debouncing are techniques used to optimize the performance of React applications by controlling the frequency of function calls in response to events like scrolling, resizing, or typing.__
- __Throttling:__ Function repeatedly calling after given intervel. (Mouse moving or Window resizing...)
- __Debouncing:__ Function calling after certain interval of time period. (Search input...)

### 5. Code spliting

### 6. Fragments

### 7. Web Workers

### 8. UseTrasition
