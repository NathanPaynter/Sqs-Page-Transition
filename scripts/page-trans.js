$( function() {
  $( 'body' ).css( 'opacity', '1' ); //Show body on load
} );
$( 'a[href^="/"]:not([href^="#"]):not([target="_blank"])' ).click( function() {
  //Fade out body when clicking link
  //that's not an anchor or opening in new tab
  $( 'body' ).css( 'opacity', '0' );
} );
