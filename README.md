# ember-test-selectors-helpers

Overrides the default `Ember.Test.find` helper in order to make querying [ember-test-selectors](https://github.com/simplabs/ember-test-selectors)' `data-test-*` attributes as straightforward as possible.

## Background

Previously, that addon shipped with a `testSelector` test helper that expanded a given string to make querying these attributes more straightforward, but it was [recently deprecated](https://github.com/simplabs/ember-test-selectors#deprecations) and will be removed in an upcoming version.

Here's what that used to look like:

Given the following Handlebars template:

```html
<div data-test-my-div>My Div</div>
```

```js
import testSelector from 'ember-test-selectors';

...

test('an element is present', function(assert) {
  assert.ok(findWithAssert(testSelector('my-div')), 'My div is present');
});

```

With this addon, there's no need for the ceremony. It's as if Ember.js shipped
with support for using `data-test-*` attributes out of the box:

```js
test('an element is present', function(assert) {
  assert.ok(findWithAssert('my-div'), 'My div is present');
});

```

The string `my-div` will automatically be expanded to a `data-test-*` attribute,
assuming it is a hyphenated string. Otherwise, it will behave as the default
`find` helper does.

## Installation

You can install this addon by running

`$ ember install ember-test-selectors-helpers`

Afterwards, you'll need to import the test selectors *before* the `startApp()`
helper is run:

```js
import overrideHelpers from './helper-overrides';

overrideHelpers();

// startApp()
```

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
