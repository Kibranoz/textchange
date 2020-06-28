
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
// This is the "Offline copy of pages" service worker

// Add this below content to your HTML page inside a <script type="module"></script> tag, or add the js file to your page at the very top to register service worker
// If you get an error about not being able to import, double check that you have type="module" on your <script /> tag

/*
 This code uses the pwa-update web component https://github.com/pwa-builder/pwa-update to register your service worker,
 tell the user when there is an update available and let the user know when your PWA is ready to use offline.
*/

import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';

const el = document.createElement('pwa-update');
document.body.appendChild(el);
