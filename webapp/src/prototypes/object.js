Object.merge = (...objects) => {
  return Object.assign.apply(this,[{}].concat(objects));
};
