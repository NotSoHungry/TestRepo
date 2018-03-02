var overlayCollection = document.getElementsByClassName('project-overlay');
    testimonialsPicture = document.getElementsByClassName('testimonials-picture')[0];
    
(function() {
    for (let i = 0; i < overlayCollection.length; i++) {
          var height = overlayCollection[i].getBoundingClientRect().height + "px";
          overlayCollection[i].getElementsByClassName('overlay-text-wrapper')[0].style.height = height;
    }
})();

window.onresize = function () {
    for (let i = 0; i < overlayCollection.length; i++) {
        (function () {
            var height = overlayCollection[i].getBoundingClientRect().height + "px";
            overlayCollection[i].getElementsByClassName('overlay-text-wrapper')[0].style.height = height;
        })()
    }
}