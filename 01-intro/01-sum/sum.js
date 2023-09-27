function sum(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  throw new TypeError('Все переданные аргументы должны быть числами');
}

module.exports = sum;
