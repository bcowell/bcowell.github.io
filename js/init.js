$(document).ready(function() {
    var options = 
    {
        bg: 'red',
        classname: 'nanobar',
        id: 'nanobar'
    };

    var bar = new Nanobar(options);

    for (var i = 0; i <= 100; i++)
    {
        bar.go(i);
    }

});