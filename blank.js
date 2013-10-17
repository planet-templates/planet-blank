
function showHeadlines()
{
    // console.log( 'showHeadlines' );
    $( '.item_content,.item_summary,.item-content,.item-summary,.item-body,.item_body').hide();
}

function showAll() {
  // console.log( 'showAll' );
 $( '.item_content,.item_summary,.item-content,.item-summary,.item-body,.item_body').show();
}

$(document).ready( function() {
  $( '#show-headlines' ).click( showHeadlines );
  $( '#show-all' ).click( showAll );
});

