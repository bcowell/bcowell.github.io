$(window).load(function()
{
    var options = 
    {
        bg: 'red',
        classname: 'nanobar',
        id: 'nanobar'
    };

    var bar = new Nanobar(options);

    function drawHeader()
    {
        let colors = 
        {
            "0": ["#49006a","#7a0177","#ae017e","#dd3497","#f768a1","#49006a","#fcc5c0","#49006a","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],
            "1": ["#b2182b","#d6604d","#2166ac","#053061"],
            "2": ["#f7fcf5","#9e0142","#253494","#f7fcf5"],
            "3": ["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],
            "4": ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],
            "5": ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],
            "6": ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],
            "7": ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],
            "8": ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],
            "9": ["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],
            "10": ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"]
        }
        
        var rand = Math.round( Math.random() * Object.keys(colors).length);
        //console.log(rand);

        var pattern = Trianglify
        ({
            cell_size: 60 + Math.random() * 20,
            variance: 0.8,
            x_colors: colors[rand],
            y_colors: 'match_x'
        });

        var c = document.getElementById("header-canvas");
        pattern.canvas(c);
    };
    
    drawHeader();

    for (var i = 0; i <= 100; i++)
    {
        bar.go(i);
    }

    // Init Co-op work term tabs
    $('.collapsible').collapsible();
    
    
});
