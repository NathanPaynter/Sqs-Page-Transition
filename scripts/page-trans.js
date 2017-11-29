/*!
 * Sqs-Page-Transition
 * Easy to add fading page transitions.
 * v1.0.1
 * License : MIT
 * Author : Nathan Paynter (http://github.com/NathanPaynter)
 */
$( function() {
  $( 'body' ).css( 'opacity', '1' ); // Show body on load
} );
$( 'a[href^="/"]:not([href^="#"]):not([target="_blank"])' ).click( function() {
  var $delayTime = 1200; // EDIT THIS IF WANTING TO INCREASE/DECREASE DELAY BEFORE LINK IS FOLLOWED

  var url = $( this ).attr( 'href' ); // Get url from the <a> href attribute
  event.preventDefault(); // Prevent default action (e.g. following the link)
  $( 'body' ).css( 'opacity', '0' ); // Fade body
  setTimeout( function() {
    window.location = url;
  }, $delayTime ); // Redirect to the url after 1200ms
} );
