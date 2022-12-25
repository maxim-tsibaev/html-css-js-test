const CounterPlugin = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
  onUpdate = () => null,
} = {}) {
  this._value = initialValue;
  this._step = step;
  this._refs = this._getRefs(rootSelector);
  this._bindEvents();
  this.onUpdate = onUpdate;
  this.updateValueUI(); // для инициализации начального значения (в спане 0 по умолч)
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  //   console.log('refs.container', refs.container);

  refs.incrementBtn = refs.container.querySelector('[data-increment]');
  refs.decrementBtn = refs.container.querySelector('[data-decrement]');
  refs.value = refs.container.querySelector('[data-value]');
  //   console.log(refs.incrementBtn);
  //   console.log(refs.decrementBtn);
  //   console.log(refs.value);

  return refs;
};

CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    console.log('this._refs.incrementBtn ', this);
    this.increment();
    this.updateValueUI();
  });

  this._refs.decrementBtn.addEventListener('click', () => {
    console.log('this._refs.decrementBtn ', this);
    this.decrement();
    this.updateValueUI();
  });
};

CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

CounterPlugin.prototype.updateValueUI = function () {
  this._refs.value.textContent = this._value;
  this.onUpdate();
};

new CounterPlugin({
  rootSelector: '#counter-1',
  step: 10,
  initialValue: 100,
  onUpdate: () => console.log('Это мой кастомный колбек для onUpdate'),
});
// console.log('counter-1', counter1);

new CounterPlugin({ rootSelector: '#counter-2', step: 2, initialValue: 24 });
// console.log('counter-2', counter2);
