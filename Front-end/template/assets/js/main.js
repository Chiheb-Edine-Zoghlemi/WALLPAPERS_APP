let root = document.documentElement;

document.getElementById('color_theme').addEventListener("change", e => {
  root.style.setProperty('--theme', document.getElementById('color_theme').value);
});

var ite=0;
document.getElementById('bg_theme').addEventListener("click", e => {
    if ( ite % 2 ==0 ) {
        root.style.setProperty('--text','#2d3939' );
        root.style.setProperty('--background','#fff' );
        $('#bg_theme').addClass('bi-brightness-high') ;
        $('#bg_theme').removeClass('bi-moon-stars')
        $('body').animate({backgroundColor:'#fff'}, 1500); 
    }else {
        root.style.setProperty('--text','#fff' );
        root.style.setProperty('--background', '#2d3939' );
        $('#bg_theme').removeClass('bi-brightness-high') ;
        $('#bg_theme').addClass('bi-moon-stars')
        $('body').animate({backgroundColor:'#2d3939'}, 1500); 
    }
    ite++ ;
});