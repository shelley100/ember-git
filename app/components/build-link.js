import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  isCurrent: computed('currentRoute', 'route', function(){
      var currentRoute = this.get('currentRoute');
      var route = this.get('route');

      return currentRoute === route;

    })
});
