# Emittable.js

> Event emit/listen mix-in with ease.

## Usage

You can use Emittable:

### As an instance

```js
var e = new Emittable();
```

This way you get an event hub, that you can attach listeners to and emit event messages.

### As a mix-in

```js
Emittable(target);`
```

This way you extend an already existing object (prototype or instance) with event functionality.

## API

### emit

Dispatch an event to all its listeners;

```js
emittable.emit(string event[, mixed argument[, ...]]);
```

### on

Attach a new listener to given event;

```js
emittable.on(string event, function callback);
```

### off

Detach all or one listener from given event;

```js
emittable.off(string event[, function callback]);
```

### once

Attach a single use listener to given event, once the event is emitted this listener detaches itself;

```js
emittable.once(string event, function callback);
```

## Support, feedback and collaboration

Feel free to contact me, open a new issue, or send a pull request.

## License

See [Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/)
