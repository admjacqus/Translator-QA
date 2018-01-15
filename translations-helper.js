(function ($) {
function downloadInnerHtml(filename, elId, mimeType) {
  var elHtml = document.getElementById(elId).innerHTML;
  // var elHtml = $('elId').innerHTML;  
  var link = document.createElement('a');
  mimeType = mimeType || 'text/plain';

  link.setAttribute('download', filename);
  link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
  link.click();
}
var fileName = 'tags.html'; // You can use the .txt extension if you want

$('#downloadLink').click(function () {
  $("*[contenteditable='true']").each(function (ind, elem) {
    $(this).removeAttr("contenteditable");
  });
  downloadInnerHtml(fileName, 'main', 'text/html');
  return false;
});


  if ($('#translators').length == 0) {
    //insert helper text
    $("<style scoped>.container [contenteditable=true]{-webkit-user-select:text;user-select:text}</style><style>.container [contenteditable]:after{width:8px;height:8px;display:inline-block;content:' '}.container [contenteditable]:after{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiUlEQVQ4y2NgGFKgs7OTl2zNEyZMmAgEDZMmTeogWTNQUwVQcyeIDaLnz5/PQYrmssmTJ1sC6QQg7gXiFlI0l4I0Q9lOQNuLiNYMVFwCxFZQtiPQgEKSNAM1WMM0k2wzTDPQ+Q5AdjEpfs6CRRPJmqEGvAC6IAlId4NcQk58vwDih0DbMxhGDgAAx6ZVXMd4yEMAAAAASUVORK5CYII=)}.container [contenteditable]:focus:after{width:0;content:''}.title1{display:block!important;}</style >").insertBefore(".std");
    $('<div id = "translators" > <h2 style="padding: 30px 0 10px;text-align:center;">Hi Translators!</h2> <h4 style="padding: 0 30px 10px;text-align:center;">Click on any text below to edit and insert your translations.</h4> <h4 style="padding: 0 30px 5px;text-align:center;text-transform:none;">To make it easier to edit, reduce your browser window width, all the rows will stack up nicely and stop moving around.</h4> <h4 style="padding: 0 30px 5px;text-align:center;text-transform:none;">To grab all text in one area, click  the text you want to edit, then press CTRL + A</h4> <h4 style="padding: 0 30px 5px;text-align:center;text-transform:none;">When your all done, hit the export button below and save as FR, DE, ES or whatever and send back over to us :)</h4> <a href="#" id="downloadLink"><button class="button" style="margin: 0 auto 30px;display: block;">Download the inner html</button></a></div >').insertBefore(".std");
  }
  setTimeout(function () {
      //make elements editbale
      $('.container h1, .container h2, .container h3, .container h4, .container h5, .container h6, .container p, .container span, .container button.button, #homeSlider-nav a').attr('contenteditable', 'true');
      //stop clicks
      $('.container a').click(function (event) {
        event.preventDefault();
      });

      $('.blocker').css('display', 'none');
    }, 1000);


    // https://stackoverflow.com/questions/44456873/spacebar-doesnt-work-in-button-element-when-i-use-the-html5-contenteditabl

}(jQuery));