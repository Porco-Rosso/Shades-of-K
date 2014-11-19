var Level = "";

$.ajaxSetup({
    cache: false,
    headers: {
        'Cache-Control': 'no-cache'
    }
});

function init() {
    refreshLocationTimer = setTimeout(init, 60 * 1000);

    jQuery.get('file:///private/var/mobile/Library/BatteryStats.txt', function (appdata) {

        var myvar = appdata;
        var substr = appdata.split('\n');
        var Level = substr[0].split(':')[1];

        var col = "FFFFFF";


        //	if( Level > 0  && Level <= 10 )  {col="#e8515a";}
        //	if( Level > 20  && Level <= 20 )  {col="#db9b5f";}
        //	if( Level > 40 && Level <= 100 )  {col="#72985c";}

        // battery bar enable/disable //
        if (EnableBatteryBar == true) {
            var col = col;
        } else {
            col = 'transparent'
            document.getElementById("sb").style.height = 0 + "px";
        }

        document.getElementById("sb").style.width = Level + "%";
        document.getElementById("sb").style.backgroundColor = col;
    });

}