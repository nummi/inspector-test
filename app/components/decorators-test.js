import Component from '@ember/component';
import { action, computed } from '@ember-decorators/object';

export default class DecoratorsTest extends Component {
  constructor() {
    super(...arguments);
    this.someKey = 1;
    this.otherKey = 'other key';
  }

  @computed('someKey', 'otherKey')
  get bar() {
    const someKey = this.get('someKey');
    const otherKey = this.get('otherKey');
    return `${someKey} / ${otherKey}`;
  }

  @action
  handleClick() {
    this.set('someKey', this.get('someKey') + 1);
  }
}
