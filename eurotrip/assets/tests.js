'use strict';

define('europe-trip-blog/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/map-view.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/map-view.js should pass ESLint\n\n');
  });

  QUnit.test('components/photo-display.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/photo-display.js should pass ESLint\n\n');
  });

  QUnit.test('components/photo-inspector.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/photo-inspector.js should pass ESLint\n\n');
  });

  QUnit.test('components/photos-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/photos-list.js should pass ESLint\n\n');
  });

  QUnit.test('components/stories-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/stories-list.js should pass ESLint\n\n');
  });

  QUnit.test('models/photo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/photo.js should pass ESLint\n\n');
  });

  QUnit.test('models/story.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/story.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/photos.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/photos.js should pass ESLint\n\n');
  });

  QUnit.test('routes/stories.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/stories.js should pass ESLint\n\n');
  });

  QUnit.test('routes/story.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/story.js should pass ESLint\n\n');
  });

  QUnit.test('services/story-manager.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/story-manager.js should pass ESLint\n\n');
  });
});
define('europe-trip-blog/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('europe-trip-blog/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'europe-trip-blog/tests/helpers/start-app', 'europe-trip-blog/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _europeTripBlogTestsHelpersStartApp, _europeTripBlogTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _europeTripBlogTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _europeTripBlogTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('europe-trip-blog/tests/helpers/resolver', ['exports', 'europe-trip-blog/resolver', 'europe-trip-blog/config/environment'], function (exports, _europeTripBlogResolver, _europeTripBlogConfigEnvironment) {

  var resolver = _europeTripBlogResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _europeTripBlogConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _europeTripBlogConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('europe-trip-blog/tests/helpers/start-app', ['exports', 'ember', 'europe-trip-blog/app', 'europe-trip-blog/config/environment'], function (exports, _ember, _europeTripBlogApp, _europeTripBlogConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var attributes = _ember['default'].merge({}, _europeTripBlogConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    return _ember['default'].run(function () {
      var application = _europeTripBlogApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('europe-trip-blog/tests/integration/components/map-view-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('map-view', 'Integration | Component | map view', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'rkLtg0+i',
      'block': '{"statements":[[1,[26,["map-view"]],false]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'E/azckoP',
      'block': '{"statements":[[0,"\\n"],[6,["map-view"],null,null,{"statements":[[0,"      template block text\\n"]],"locals":[]},null],[0,"  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('europe-trip-blog/tests/integration/components/photo-display-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('photo-display', 'Integration | Component | photo display', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'q9pRdSSE',
      'block': '{"statements":[[1,[26,["photo-display"]],false]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '1TbgL9DB',
      'block': '{"statements":[[0,"\\n"],[6,["photo-display"],null,null,{"statements":[[0,"      template block text\\n"]],"locals":[]},null],[0,"  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('europe-trip-blog/tests/integration/components/photo-inspector-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('photo-inspector', 'Integration | Component | photo inspector', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'tryIucV0',
      'block': '{"statements":[[1,[26,["photo-inspector"]],false]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'MO2+MkxQ',
      'block': '{"statements":[[0,"\\n"],[6,["photo-inspector"],null,null,{"statements":[[0,"      template block text\\n"]],"locals":[]},null],[0,"  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('europe-trip-blog/tests/integration/components/photos-list-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('photos-list', 'Integration | Component | photos list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'zy+iZuaK',
      'block': '{"statements":[[1,[26,["photos-list"]],false]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'mfcpcOzc',
      'block': '{"statements":[[0,"\\n"],[6,["photos-list"],null,null,{"statements":[[0,"      template block text\\n"]],"locals":[]},null],[0,"  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('europe-trip-blog/tests/integration/components/stories-list-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('stories-list', 'Integration | Component | stories list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'FQZb+US6',
      'block': '{"statements":[[1,[26,["stories-list"]],false]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'db4qcutx',
      'block': '{"statements":[[0,"\\n"],[6,["stories-list"],null,null,{"statements":[[0,"      template block text\\n"]],"locals":[]},null],[0,"  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('europe-trip-blog/tests/test-helper', ['exports', 'europe-trip-blog/tests/helpers/resolver', 'ember-qunit'], function (exports, _europeTripBlogTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_europeTripBlogTestsHelpersResolver['default']);
});
define('europe-trip-blog/tests/tests.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/map-view-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/map-view-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/photo-display-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'integration/components/photo-display-test.js should pass ESLint\n\n1:55 - Extra semicolon. (semi)\n2:45 - Extra semicolon. (semi)\n6:3 - Extra semicolon. (semi)\n13:38 - Extra semicolon. (semi)\n15:43 - Extra semicolon. (semi)\n22:5 - Extra semicolon. (semi)\n24:62 - Extra semicolon. (semi)\n25:3 - Extra semicolon. (semi)');
  });

  QUnit.test('integration/components/photo-inspector-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'integration/components/photo-inspector-test.js should pass ESLint\n\n1:55 - Extra semicolon. (semi)\n2:45 - Extra semicolon. (semi)\n6:3 - Extra semicolon. (semi)\n13:40 - Extra semicolon. (semi)\n15:43 - Extra semicolon. (semi)\n22:5 - Extra semicolon. (semi)\n24:62 - Extra semicolon. (semi)\n25:3 - Extra semicolon. (semi)');
  });

  QUnit.test('integration/components/photos-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'integration/components/photos-list-test.js should pass ESLint\n\n1:55 - Extra semicolon. (semi)\n2:45 - Extra semicolon. (semi)\n6:3 - Extra semicolon. (semi)\n13:36 - Extra semicolon. (semi)\n15:43 - Extra semicolon. (semi)\n22:5 - Extra semicolon. (semi)\n24:62 - Extra semicolon. (semi)\n25:3 - Extra semicolon. (semi)');
  });

  QUnit.test('integration/components/stories-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/stories-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/photos-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/photos-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/stories-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/stories-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/story-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/story-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/story-manager-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/story-manager-test.js should pass ESLint\n\n');
  });
});
define('europe-trip-blog/tests/unit/routes/photos-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:photos', 'Unit | Route | photos', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('europe-trip-blog/tests/unit/routes/stories-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:stories', 'Unit | Route | stories', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('europe-trip-blog/tests/unit/routes/story-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:story', 'Unit | Route | story', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('europe-trip-blog/tests/unit/services/story-manager-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:story-manager', 'Unit | Service | story manager', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
require('europe-trip-blog/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
