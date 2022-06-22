function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    hash = args.join(',');
    console.log(cache);
    if (hash in cache) {
      return "Из кэша: " + cache[hash]

    } else if (Object.keys(cache).length > 4) {
      delete cache[Object.keys(cache)[0]];
      // else if (cache.length > 4) { 
      // cache.splice(0, 1);
      cache[hash]= func(...args);
      return "Вычисляем: " +  cache[hash];

      
    } else {
      cache[hash]= func(...args);
      console.log(cache);
      return "Вычисляем: " +  cache[hash];
    }
  }
  return wrapper
}

function debounceDecoratorNew(func) {
  let timeout;
  let flag = false;

  function wrapper(...args) {
    if (!flag) {
      func(...args)
      flag = true;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => { 
        func(...args); 
        flag = false
      }, ms);
    }
  }
  return wrapper
}

function debounceDecorator2(func) {
  let timeout;
  let flag = false;
  wrapper.history = []

  function wrapper(...args) {
    wrapper.history.push(args)
    if (!flag) {
      func(...args)
      flag = true;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => { 
        func(...args); 
        flag = false
      }, ms);
    }
  }
  return wrapper
}
