module.exports = function(selector, target) {

  return new Promise(function(resolve) {
    var element = document.querySelector(selector);
    
    if (element) {
      resolve(element);
      return;
    }

    if (!target) {
      target = document.body;
    }

    target.addEventListener('DOMNodeInserted', function(evt) {
      var element = document.querySelector(selector);
      
      if (element) {
        resolve(element)
      }
    }, false);
  });
}
