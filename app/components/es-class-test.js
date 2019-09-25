import Component from '@ember/component';

export default class MyComponent extends Component {
  someProp = 'hello'

  get getSomeProp() {
    return this.someProp;
  }

  someFunc() {
    console.log('#someFunc');
  }
}

