// For the below to work with the escape key
// I needed to add data-keyboard="false" to the modal
// in the HTML so that the standard bootstrap function
// doesn't fire, the below fires instead.

$('div.modal').on('show.bs.modal', function() {
  var modal = this;
  var hash = modal.id;
  window.location.hash = hash;
  window.onhashchange = function() {
    if (!location.hash) {
      $(modal).modal('hide');
    } else {
      $(modal).modal('show');
    }
  }
});

$('div.modal').on('hidden.bs.modal', function() {
  var hash = this.id;
  history.replaceState('', document.title, window.location.pathname);
});

//when close button clicked simulate back
$('div.modal button.close').on('click', function() {
  window.history.back();
})

//when esc pressed when modal open simulate back
$('div.modal').keyup(function(e) {
  if (e.keyCode == 27) {
    window.history.back();
  }
});

var hash = window.location.hash;
if (hash != ''){
    $(hash).modal('show');
};

$('#stop4modal').on('show.bs.modal', function () {
    $('.modal .modal-body').css('overflow-y', 'auto');
    $('.modal .modal-body').css('max-height', $(window).height() * 0.7);
});
