
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
  $("#copier").click(()=>{$("#resultat p").html().select();document.execCommand("copy")})
function stringSansVirgules(rangee){
    var string = " "
    for (i = 0; i<rangee.length; i++){
        string += rangee[i];
    }
    return string
}

$('#alterner').click(function(){
    var rangeeAChanger = $("#texttoChange").val().toString().split('');
    var nouvelRangee = []
    for (i=0; i< rangeeAChanger.length; i++){
        if (i %2 == 0) {
            nouvelRangee[i] = rangeeAChanger[i].toLowerCase();
        }
        else {
            nouvelRangee[i] = rangeeAChanger[i].toUpperCase(); 
        }

    }
    $("#resultat p").html(stringSansVirgules(nouvelRangee));
    
})
$("#clap").click(function(){
    var clapEmoji = $("select#hand-choose").val().toString();
    var rangeeAChanger = $("#texttoChange").val().toString().split(' ');
    var nouvelRangee = []
    for (i=0; i<rangeeAChanger.length; i++){
        nouvelRangee[i] = rangeeAChanger[i] + " " + clapEmoji + " ";
    }
    $("#resultat p").html(stringSansVirgules(nouvelRangee));

})