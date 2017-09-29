import Ember from 'ember';

export default Ember.Controller.extend({
  keyPressed: false,

  actions: {
    keyPressed() {
      this.set('keyPressed', true);
    },
  },
});
