/**
 * Created by chova_000 on 16-Mar-15.
 */

/**
 * testuje ci setColorValve nastavila farbu*/
var spustiTestValve = function () {
    setColorValve (true);
    setColorValve (1);
    setColorValve (false);
    setColorValve ("true");
    setColorValve (true);
    setColorValve (0);
    setColorValve (1);
    setColorValve ("yellow");
};
/**
na overenie funkcnosti / bud cez prikazovy riadok javascriptu alebo tlacidlami
 */
function toggleDemoStart() {
    var button = document.getElementById("demo");
    spustiTestValve ();
}

