import Ember from 'ember';
import Component from '@ember/component';
import { computed } from '@ember/object';
import { merge } from '@ember/polyfills';

export default Component.extend({
  text: 'Deprecation Component',
  texts: ['a', 'b', 'c', 'd'],

  capitalizedTexts: computed('texts.@each', function() {
    return this.texts.map(function(t) {
      Ember.Logger.log('testing');
      var a = { first: 'Yehuda' };
      var b = { last: 'Katz' };
      merge(a, b);
      return t.toUpperCase();
    });
  })
});

