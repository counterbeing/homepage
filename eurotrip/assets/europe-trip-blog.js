"use strict";



define('europe-trip-blog/adapters/application', ['exports', 'ember-data', 'ember-inflector'], function (exports, _emberData, _emberInflector) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
    namespace: 'data',
    urlForFindAll: function urlForFindAll(modelName) {
      var model = (0, _emberInflector.pluralize)(modelName);
      var baseUrl = this.buildURL();
      return baseUrl + '/' + model + '.json';
    },

    urlForFindRecord: function urlForFindRecord(id, modelName) {
      var baseUrl = this.buildURL();
      var model = (0, _emberInflector.pluralize)(modelName);
      return baseUrl + '/' + model + '/' + id + '.json';
    }
  });
});
define('europe-trip-blog/app', ['exports', 'ember', 'europe-trip-blog/resolver', 'ember-load-initializers', 'europe-trip-blog/config/environment'], function (exports, _ember, _europeTripBlogResolver, _emberLoadInitializers, _europeTripBlogConfigEnvironment) {

  var App = undefined;

  App = _ember['default'].Application.extend({
    modulePrefix: _europeTripBlogConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _europeTripBlogConfigEnvironment['default'].podModulePrefix,
    Resolver: _europeTripBlogResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _europeTripBlogConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('europe-trip-blog/components/array-path-layer', ['exports', 'ember-leaflet/components/array-path-layer'], function (exports, _emberLeafletComponentsArrayPathLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsArrayPathLayer['default'];
    }
  });
});
define('europe-trip-blog/components/base-layer', ['exports', 'ember-leaflet/components/base-layer'], function (exports, _emberLeafletComponentsBaseLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsBaseLayer['default'];
    }
  });
});
define('europe-trip-blog/components/circle-layer', ['exports', 'ember-leaflet/components/circle-layer'], function (exports, _emberLeafletComponentsCircleLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsCircleLayer['default'];
    }
  });
});
define('europe-trip-blog/components/circle-marker-layer', ['exports', 'ember-leaflet/components/circle-marker-layer'], function (exports, _emberLeafletComponentsCircleMarkerLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsCircleMarkerLayer['default'];
    }
  });
});
define('europe-trip-blog/components/container-layer', ['exports', 'ember-leaflet/components/container-layer'], function (exports, _emberLeafletComponentsContainerLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsContainerLayer['default'];
    }
  });
});
define('europe-trip-blog/components/div-overlay-layer', ['exports', 'ember-leaflet/components/div-overlay-layer'], function (exports, _emberLeafletComponentsDivOverlayLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsDivOverlayLayer['default'];
    }
  });
});
define('europe-trip-blog/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('europe-trip-blog/components/geojson-layer', ['exports', 'ember-leaflet/components/geojson-layer'], function (exports, _emberLeafletComponentsGeojsonLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsGeojsonLayer['default'];
    }
  });
});
define('europe-trip-blog/components/image-layer', ['exports', 'ember-leaflet/components/image-layer'], function (exports, _emberLeafletComponentsImageLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsImageLayer['default'];
    }
  });
});
define('europe-trip-blog/components/leaflet-map', ['exports', 'ember-leaflet/components/leaflet-map'], function (exports, _emberLeafletComponentsLeafletMap) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsLeafletMap['default'];
    }
  });
});
define('europe-trip-blog/components/map-view', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('europe-trip-blog/components/markdown-to-html', ['exports', 'ember-cli-showdown/components/markdown-to-html'], function (exports, _emberCliShowdownComponentsMarkdownToHtml) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliShowdownComponentsMarkdownToHtml['default'];
    }
  });
});
define('europe-trip-blog/components/marker-layer', ['exports', 'ember-leaflet/components/marker-layer'], function (exports, _emberLeafletComponentsMarkerLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsMarkerLayer['default'];
    }
  });
});
define('europe-trip-blog/components/path-layer', ['exports', 'ember-leaflet/components/path-layer'], function (exports, _emberLeafletComponentsPathLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPathLayer['default'];
    }
  });
});
define('europe-trip-blog/components/photo-display', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['photo-display'],
    actions: {
      inspectPhoto: function inspectPhoto() {
        this.sendAction('inspect', this.get('photo'));
      }
    }
  });
});
define('europe-trip-blog/components/photo-inspector', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['photo-inspector']
  });
});
define('europe-trip-blog/components/photos-list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['photos-list'],
    inspectorVisible: true,
    inspectedValue: null,
    actions: {
      inspect: function inspect(photo) {
        _ember['default'].set(this, 'inspectorVisible', true);
        _ember['default'].set(this, 'inspectedValue', photo);
      },

      closeInspector: function closeInspector() {
        _ember['default'].set(this, 'inspectorVisible', false);
      }
    }
  });
});
define('europe-trip-blog/components/point-path-layer', ['exports', 'ember-leaflet/components/point-path-layer'], function (exports, _emberLeafletComponentsPointPathLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPointPathLayer['default'];
    }
  });
});
define('europe-trip-blog/components/polygon-layer', ['exports', 'ember-leaflet/components/polygon-layer'], function (exports, _emberLeafletComponentsPolygonLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPolygonLayer['default'];
    }
  });
});
define('europe-trip-blog/components/polyline-layer', ['exports', 'ember-leaflet/components/polyline-layer'], function (exports, _emberLeafletComponentsPolylineLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPolylineLayer['default'];
    }
  });
});
define('europe-trip-blog/components/popup-layer', ['exports', 'ember-leaflet/components/popup-layer'], function (exports, _emberLeafletComponentsPopupLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPopupLayer['default'];
    }
  });
});
define('europe-trip-blog/components/stories-list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    storyService: _ember['default'].inject.service('story-manager'),

    store: _ember['default'].inject.service(),

    classNames: ['stories-index'],

    showStories: _ember['default'].on('didInsertElement', function () {
      var _this = this;

      this.get('store').findAll('story').then(function (stories) {
        _this.set('stories', stories);
      });
    }),

    actions: {
      showServiceState: function showServiceState() {
        this.get('storyService').showSelectedStory();
      },

      selectStory: function selectStory(story) {
        this.get('storyService').setCurrentlySelectedStory(story.id);
      }
    }
  });
});
define('europe-trip-blog/components/tile-layer', ['exports', 'ember-leaflet/components/tile-layer'], function (exports, _emberLeafletComponentsTileLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsTileLayer['default'];
    }
  });
});
define('europe-trip-blog/components/tooltip-layer', ['exports', 'ember-leaflet/components/tooltip-layer'], function (exports, _emberLeafletComponentsTooltipLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsTooltipLayer['default'];
    }
  });
});
define('europe-trip-blog/components/wms-tile-layer', ['exports', 'ember-leaflet/components/wms-tile-layer'], function (exports, _emberLeafletComponentsWmsTileLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsWmsTileLayer['default'];
    }
  });
});
define('europe-trip-blog/helpers/app-version', ['exports', 'ember', 'europe-trip-blog/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _europeTripBlogConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _europeTripBlogConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('europe-trip-blog/helpers/div-icon', ['exports', 'ember-leaflet/helpers/div-icon'], function (exports, _emberLeafletHelpersDivIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersDivIcon['default'];
    }
  });
  Object.defineProperty(exports, 'divIcon', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersDivIcon.divIcon;
    }
  });
});
define('europe-trip-blog/helpers/icon', ['exports', 'ember-leaflet/helpers/icon'], function (exports, _emberLeafletHelpersIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersIcon['default'];
    }
  });
  Object.defineProperty(exports, 'icon', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersIcon.icon;
    }
  });
});
define('europe-trip-blog/helpers/lat-lng-bounds', ['exports', 'ember-leaflet/helpers/lat-lng-bounds'], function (exports, _emberLeafletHelpersLatLngBounds) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersLatLngBounds['default'];
    }
  });
  Object.defineProperty(exports, 'latLngBounds', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersLatLngBounds.latLngBounds;
    }
  });
});
define('europe-trip-blog/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('europe-trip-blog/helpers/point', ['exports', 'ember-leaflet/helpers/point'], function (exports, _emberLeafletHelpersPoint) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersPoint['default'];
    }
  });
  Object.defineProperty(exports, 'point', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersPoint.point;
    }
  });
});
define('europe-trip-blog/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('europe-trip-blog/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'europe-trip-blog/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _europeTripBlogConfigEnvironment) {
  var _config$APP = _europeTripBlogConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('europe-trip-blog/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('europe-trip-blog/initializers/data-adapter', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('europe-trip-blog/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/index'], function (exports, _emberDataSetupContainer, _emberDataIndex) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('europe-trip-blog/initializers/export-application-global', ['exports', 'ember', 'europe-trip-blog/config/environment'], function (exports, _ember, _europeTripBlogConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_europeTripBlogConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _europeTripBlogConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_europeTripBlogConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('europe-trip-blog/initializers/injectStore', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('europe-trip-blog/initializers/leaflet-assets', ['exports', 'ember', 'ember-get-config'], function (exports, _ember, _emberGetConfig) {
  exports.initialize = initialize;

  /* global L */

  var isNone = _ember['default'].isNone;

  function initialize() /* container, application */{
    if (typeof FastBoot === 'undefined') {
      var prefix = '';

      if (!isNone(_emberGetConfig['default'].rootURL)) {
        prefix = _emberGetConfig['default'].rootURL;
      } else if (!isNone(_emberGetConfig['default'].baseURL)) {
        prefix = _emberGetConfig['default'].baseURL;
      }

      L.Icon.Default.imagePath = prefix + 'assets/images/';
    }
  }

  exports['default'] = {
    name: 'leaflet-assets',
    initialize: initialize
  };
});
define('europe-trip-blog/initializers/store', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('europe-trip-blog/initializers/transforms', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("europe-trip-blog/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _emberDataInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataInstanceInitializersInitializeStoreService["default"]
  };
});
define('europe-trip-blog/models/photo', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    dateCreated: _emberData['default'].attr('string'),
    createdAt: _emberData['default'].attr('date'),
    filename: _emberData['default'].attr('string'),
    caption: _emberData['default'].attr('string'),
    latitude: _emberData['default'].attr('number'),
    longitude: _emberData['default'].attr('number')
  });
});
define('europe-trip-blog/models/story', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
  exports['default'] = _emberData['default'].Model.extend({
    storyService: _ember['default'].inject.service('story-manager'),
    selected: _ember['default'].computed('id', 'storyService.currentlySelectedStory', function () {
      return this.get('id') == this.get('storyService').currentlySelectedStory;
    }),
    title: _emberData['default'].attr('string'),
    date: _emberData['default'].attr('date'),
    body: _emberData['default'].attr('string')
  });
});
define('europe-trip-blog/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('europe-trip-blog/router', ['exports', 'ember', 'europe-trip-blog/config/environment'], function (exports, _ember, _europeTripBlogConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _europeTripBlogConfigEnvironment['default'].locationType,
    rootURL: _europeTripBlogConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('stories');
    this.route('story', { path: '/story/:story_id' });
    this.route('photos');
  });

  exports['default'] = Router;
});
define('europe-trip-blog/routes/photos', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('photo');
    },
    inspectorVisible: false,
    actions: {
      inspect: function inspect() {
        this.toggleProperty('inspectorVisible');
      }
    }
  });
});
define('europe-trip-blog/routes/stories', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('story');
    },

    afterModel: function afterModel(model) {
      this.transitionTo('story', model.get('lastObject'));
    }
  });
});
define('europe-trip-blog/routes/story', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('story', params.story_id, { reload: true });
    }
  });
});
define('europe-trip-blog/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('europe-trip-blog/services/story-manager', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    currentlySelectedStory: undefined,

    setCurrentlySelectedStory: function setCurrentlySelectedStory(story) {
      this.set('currentlySelectedStory', story);
    },

    showSelectedStory: function showSelectedStory() {
      if (this.get('currentlySelectedStory')) {
        console.log('Displaying: ' + this.get('currentlySelectedStory'));
      } else {
        console.log('select a damn story');
      }
    }
  });
});
define("europe-trip-blog/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "fpii6TsA", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"box\"],[13],[0,\"\\n  \"],[11,\"nav\",[]],[15,\"class\",\"row header\"],[13],[0,\"\\n    \"],[6,[\"link-to\"],[\"stories\"],null,{\"statements\":[[0,\"Stories\"]],\"locals\":[]},null],[0,\"\\n    \"],[6,[\"link-to\"],[\"photos\"],null,{\"statements\":[[0,\"Photos\"]],\"locals\":[]},null],[0,\"\\n  \"],[14],[0,\"\\n\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"row content\"],[13],[0,\"\\n    \"],[1,[26,[\"outlet\"]],false],[0,\"\\n  \"],[14],[0,\"\\n\\n\"],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "europe-trip-blog/templates/application.hbs" } });
});
define("europe-trip-blog/templates/components/map-view", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "PklJOQzB", "block": "{\"statements\":[[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "europe-trip-blog/templates/components/map-view.hbs" } });
});
define("europe-trip-blog/templates/components/photo-display", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "mQvppijy", "block": "{\"statements\":[[0,\"  \"],[11,\"figure\",[]],[16,\"onclick\",[33,[\"action\"],[[28,[null]],\"inspectPhoto\"],null],null],[13],[0,\"\\n    \"],[11,\"img\",[]],[16,\"src\",[34,[\"/photos/\",[28,[\"photo\",\"dateCreated\"]],\"/medium/\",[28,[\"photo\",\"filename\"]]]]],[13],[14],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "europe-trip-blog/templates/components/photo-display.hbs" } });
});
define("europe-trip-blog/templates/components/photo-inspector", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "VeF9vFaR", "block": "{\"statements\":[[18,\"default\"],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"photo\"]]],null,{\"statements\":[[0,\"\\n\"],[6,[\"if\"],[[28,[\"photo\",\"latitude\"]]],null,{\"statements\":[[6,[\"leaflet-map\"],null,[[\"lat\",\"lng\",\"zoom\"],[[28,[\"photo\",\"latitude\"]],[28,[\"photo\",\"longitude\"]],14]],{\"statements\":[[0,\"\\n\\n      \"],[1,[33,[\"tile-layer\"],null,[[\"url\"],[\"http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}\"]]],false],[0,\"\\n\"],[6,[\"marker-layer\"],null,[[\"lat\",\"lng\"],[[28,[\"photo\",\"latitude\"]],[28,[\"photo\",\"longitude\"]]]],{\"statements\":[[6,[\"popup-layer\"],null,null,{\"statements\":[[0,\"          \"],[11,\"h3\",[]],[13],[0,\"Place\"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"metadata\"],[13],[0,\"\\n    \"],[11,\"h2\",[]],[13],[1,[28,[\"photo\",\"title\"]],false],[14],[0,\"\\n    \"],[11,\"figcaption\",[]],[13],[0,\"\\n      \"],[1,[28,[\"photo\",\"caption\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "europe-trip-blog/templates/components/photo-inspector.hbs" } });
});
define("europe-trip-blog/templates/components/photos-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "x+WmBleY", "block": "{\"statements\":[[18,\"default\"],[0,\"\\n\\n\\n\"],[6,[\"if\"],[[28,[\"inspectorVisible\"]]],null,{\"statements\":[[0,\"  \"],[1,[33,[\"photo-inspector\"],null,[[\"photo\"],[[28,[\"inspectedValue\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"photo-grid\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"photos\"]]],null,{\"statements\":[[0,\"    \"],[1,[33,[\"photo-display\"],null,[[\"photo\",\"inspect\"],[[28,[\"photo\"]],[33,[\"action\"],[[28,[null]],\"inspect\"],null]]]],false],[0,\"\\n\"]],\"locals\":[\"photo\"]},null],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "europe-trip-blog/templates/components/photos-list.hbs" } });
});
define("europe-trip-blog/templates/components/stories-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "7fPwsSWP", "block": "{\"statements\":[[11,\"ul\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"stories\"]]],null,{\"statements\":[[6,[\"link-to\"],[\"story\",[28,[\"story\",\"id\"]]],null,{\"statements\":[[0,\"    \"],[11,\"li\",[]],[16,\"class\",[34,[[33,[\"if\"],[[28,[\"story\",\"selected\"]],\"selected\"],null]]]],[5,[\"action\"],[[28,[null]],\"selectStory\",[28,[\"story\"]]]],[13],[0,\"\\n      \"],[1,[28,[\"story\",\"title\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"story\"]},null],[14],[0,\"\\n\"],[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "europe-trip-blog/templates/components/stories-list.hbs" } });
});
define("europe-trip-blog/templates/photos", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "LqHvQdPl", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\\n\"],[11,\"h2\",[]],[13],[0,\"Photos\"],[14],[0,\"\\n\\n\\n\"],[1,[33,[\"photos-list\"],null,[[\"photos\"],[[28,[\"model\"]]]]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "europe-trip-blog/templates/photos.hbs" } });
});
define("europe-trip-blog/templates/stories", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "iXnd6xfT", "block": "{\"statements\":[[0,\"\\n\"],[1,[26,[\"stories-list\"]],false],[0,\"\\n\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "europe-trip-blog/templates/stories.hbs" } });
});
define("europe-trip-blog/templates/story", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "k8vzpfky", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"story-layout\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"stories-index\"],[13],[0,\"\\n      \"],[1,[26,[\"stories-list\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"story-body\"],[13],[0,\"\\n      \"],[11,\"br\",[]],[13],[14],[0,\"\\n      \"],[11,\"h1\",[]],[13],[1,[28,[\"model\",\"title\"]],false],[14],[0,\"\\n      \"],[11,\"br\",[]],[13],[14],[0,\"\\n      \"],[1,[28,[\"model\",\"body\"]],true],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "europe-trip-blog/templates/story.hbs" } });
});


define('europe-trip-blog/config/environment', ['ember'], function(Ember) {
  var prefix = 'europe-trip-blog';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("europe-trip-blog/app")["default"].create({"name":"europe-trip-blog","version":"0.0.0+3bec6adb"});
}
//# sourceMappingURL=europe-trip-blog.map
