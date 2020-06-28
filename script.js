
function stringSansVirgules(rangee){
    var string = " "
    for (i = 0; i<rangee.length; i++){
        string += rangee[i];
        console.log(string)
    }
    console.log(rangee);
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
    console.log(nouvelRangee);
    $("#resultat p").html(stringSansVirgules(nouvelRangee));
    
})
