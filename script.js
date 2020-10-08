var teste = document.getElementById("teste")

window.addEventListener("load", function(){
    setInterval(function(){
        teste.style.color = (teste.style.color=='red'?'green': 'red');
    }, 500);
    setInterval(function(){
        teste.innerHTML = (teste.innerHTML=='<h1 id="teste">TESTE</h1>'?'<h2 id="teste">TESTE</h2>': '<h1 id="teste">TESTE</h1>');
    }, 500);
    setInterval(function(){
        teste.style.fontFamily = (teste.style.fontFamily=="arial"?"Courier New": "arial");
    }, 500);
}, false);

/*
    setTimeout(function(){teste.style.color = "red"}, i);
        
    setTimeout(function(){teste.style.color = "green"}, i+100);   

*/