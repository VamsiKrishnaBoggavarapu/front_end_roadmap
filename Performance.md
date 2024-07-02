### List Virtualization
- __Initial Render:__ When your app starts, list virtualization only renders the visible items that fit within the container’s viewable area in the DOM.
- __Scroll Event Handling:__ As the user scrolls through the list, a scroll event is triggered. The virtualization library listens to this event and calculates which items should be visible based on the scroll position.
- __Dynamic Rendering:__ As you scroll, the virtualization library dynamically renders the new visible items while removing off-screen ones. This reduces the amount of rendering required and ensures a smooth and efficient scrolling experience.
