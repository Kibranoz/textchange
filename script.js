function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}
$("#copie").click(() => {
    console.log("click")
  copyToClipboard($("#resultat p").text());
});
function stringSansVirgules(rangee) {
  var string = " ";
  for (i = 0; i < rangee.length; i++) {
    string += rangee[i];
  }
  return string;
}

$("#alterner").click(function () {
  var rangeeAChanger = $("#texttoChange").val().toString().split("");
  var nouvelRangee = [];
  for (i = 0; i < rangeeAChanger.length; i++) {
    if (i % 2 == 0) {
      nouvelRangee[i] = rangeeAChanger[i].toLowerCase();
    } else {
      nouvelRangee[i] = rangeeAChanger[i].toUpperCase();
    }
  }
  $("#resultat p").html(stringSansVirgules(nouvelRangee));
});
$("#clap").click(function () {
  var clapEmoji = $("select#hand-choose").val().toString();
  var rangeeAChanger = $("#texttoChange").val().toString().split(" ");
  var nouvelRangee = [];
  for (i = 0; i < rangeeAChanger.length; i++) {
    nouvelRangee[i] = rangeeAChanger[i] + " " + clapEmoji + " ";
  }
  $("#resultat p").html(stringSansVirgules(nouvelRangee));
});
