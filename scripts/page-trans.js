$( function() {
  $( 'body' ).css( 'opacity', '1' ); // Show body on load
} );
$( 'a[href^="/"]:not([href^="#"]):not([target="_blank"])' ).click( function() {
  var url = $( this ).attr( 'href' ); // Get url from the <a> href attribute
  event.preventDefault(); // Prevent default action (e.g. following the link)
  $( 'body' ).css( 'opacity', '0' ); // Fade body
  setTimeout( function() {
    window.location = url;
  }, 1200 ); // Redirect to the url after 1200ms
} );
