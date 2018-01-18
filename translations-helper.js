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
var fileName = 'Rename_me.html';

// click download, remove editable and download
$('#downloadLink').click(function () {
  $("*[contentEditable='true']").each(function (ind, elem) {
    $(this).removeAttr("contentEditable");
    
  });
  downloadInnerHtml(fileName, 'main', 'text/html');
  return false;
});

// inserts one text block
  if ($('#translators').length == 0) {
    //insert helper text once
    $("<style scoped>.container [contenteditable=true]{-webkit-user-select:text;user-select:text}</style><style>.container [contenteditable]:after{width:8px;height:8px;display:inline-block;content:' '}.container [contenteditable]:after{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiUlEQVQ4y2NgGFKgs7OTl2zNEyZMmAgEDZMmTeogWTNQUwVQcyeIDaLnz5/PQYrmssmTJ1sC6QQg7gXiFlI0l4I0Q9lOQNuLiNYMVFwCxFZQtiPQgEKSNAM1WMM0k2wzTDPQ+Q5AdjEpfs6CRRPJmqEGvAC6IAlId4NcQk58vwDih0DbMxhGDgAAx6ZVXMd4yEMAAAAASUVORK5CYII=)}.container [contenteditable]:focus:after{width:0;content:''}.title1{display:block!important;}.button{text-transform:none;}</style >").insertBefore(".std");
    $('<div id="translators" style="max-width:800px;margin: 0 auto 30px;"> <h2 style="padding: 30px 0 10px;text-align:center;">Hi Translators!</h2> <h4 style="padding: 0 30px 10px;text-align:center;text-transform:none;">The pencil icon indicates editable content, just click and type.</h4> <h4 style="padding: 0 30px 5px;text-align:center;text-transform:none;">To grab all text in one area, click  the text you want to edit, then press CTRL + A</h4> <h4 style="padding: 0 30px 5px;text-align:center;text-transform:none;">When your all done, hit the export button below and save as FR, DE, ES or whatever and send back over to the Adams :)</h4> <a href="#" id="downloadLink"><div style="display: flex;justify-content:space-around;align-items:center;flex-wrap:wrap;padding:25px;margin:0 auto;max-width:600px"><button class="button">download the inner html</button></a><button class="button pause">pause slider</button><button class="button play">play slider</button></div>').insertBefore(".std ");
  }
  // wait for text to be inserted then...
  setTimeout(function () {
      //make elements editable
      $('.container h1, .container h2, .container h3, .container h4, .container h5, .container h6, .container p, .container span, .container button.button, #homeSlider-nav a').attr('contentEditable', true);
      //stop clicks
      $('.container a').click(function (event) {
        event.preventDefault();
      });
      // hide the 'blocker' element which covers slick three.
      $('.blocker').css('display', 'none');
    }, 1000);

    // recognise spacebar within buttons
    function insertHtmlAtCursor(html) {
      var range, node;
      if (window.getSelection && window.getSelection().getRangeAt) {
        range = window.getSelection().getRangeAt(0);
        node = range.createContextualFragment(html);
        range.insertNode(node);
        window.getSelection().modify('move', 'forward', 'character');
      } else if (document.selection && document.selection.createRange) {
        document.selection.createRange().pasteHTML(html);
        document.selection.collapseToEnd();
        document.selection.modify('move', 'forward', 'character');
      }
    }
      $(document).on('keyup', 'button', function (e) {
        if (e.keyCode == 32) {
          insertHtmlAtCursor(' ');
        }
      });

      $('.pause').on('click', function () {
        $('#homeSlider').slick('slickPause');
      });

      $('.play').on('click', function () {
            $('#homeSlider').slick('slickPlay');
              });


}(jQuery));