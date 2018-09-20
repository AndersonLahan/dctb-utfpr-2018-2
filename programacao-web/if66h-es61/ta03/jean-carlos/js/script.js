$(document).ready(() => {
    $.ajax({
        type: 'GET',
        url: 'https://diogocezar.github.io/bazar/json/database.json',
        success: function (data) {
            $('#about').append(aboutContent(data.configs));            
            $('#products').append(productsContent(data.products));            

        },
    });

});


function aboutContent(config) {
    var content='<div class="about">';
    content += '<h1>' + config.title + '</h1>';
    content += '<h2>' + config.subTitle + '</h2>';
    content += '<p>' + config.email + '</p>';
    content += '<p>' + config.phone + '</p>';
    config.description.forEach(d => {
        $.each(d, function (key, value) {
            content += '<'+key+'>'+value+'</'+key+'>';
        });
    });
    content+='</div>'
    return content;
}

function productsContent(products){
    var content='<div class="products">';
    products.forEach(p =>{
        content+='<h2>'+p.name+'</h2>';
        content+='<img src="'+p.image+'"</img>';
        p.description.forEach(d =>{
            $.each(d, function(key, value){
                content+='<'+key+'>'+value+'</'+key+'>';
            });
        });    
        content+='<h2>R$ '+p.price+',00</h2>';
    });
    content+='</div>'
    return content;
}