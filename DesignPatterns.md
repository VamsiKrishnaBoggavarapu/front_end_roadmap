## Creational Patterns

### Singleton Pattern

- The Singleton Pattern ensures that a class can only have a single instance throughout the lifetime of an application.
- Global State Management: configuration settings, user preferences etc.
- Resource Management: Database connections, network sockets, or thread pools, a Singleton ensures efficient allocation and prevents conflicts.
- Logging and Analytics
- Caching: Cache frequently accessed data to improve performance

```javascript
class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    Logger.instance = this;
  }
  getInstance() {
    return this;
  }
  logging(message, type) {
    console.log(`Message - ${message}, Error type - ${type}`);
  }
}

const LoggerInstance = Object.freeze(new Logger());
//export default LoggerInstance;

LoggerInstance.logging("Trigger logging", "error");
```

### Prototype Pattern

### Factory Pattern

## Structural Patterns

### Flyweight Pattern

### Proxy Pattern

## Behavioral Patterns

### Command Pattern

### Mediator/Middleware Pattern

### Observer Pattern
