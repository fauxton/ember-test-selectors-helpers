/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-test-selectors-helpers',
  treeForAddonTestSupport(tree) {
    // intentionally not calling _super here
    // so that can have our `import`'s be
    // import { click, fillIn } from 'ember-native-dom-helpers';
    // total ripoff of
    // https://github.com/cibernox/ember-native-dom-helpers/blob/master/index.js

    const Funnel = require('broccoli-funnel');

    let namespacedTree = new Funnel(tree, {
      srcDir: '/',
      destDir: `/${this.moduleName()}`,
      annotation: `Addon#treeForTestSupport (${this.name})`,
    });

    return this.preprocessJs(namespacedTree, '/', this.name, {
      registry: this.registry,
    });
  }
};
