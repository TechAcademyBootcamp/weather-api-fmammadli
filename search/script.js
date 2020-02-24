$('form').on('submit',function(e){
e.preventDefault();
var searched_movie=$('#search_input').val();
console.log(searched_movie);


$.ajax({
url: `http://www.omdbapi.com/?t=${searched_movie}&apikey=35b13908`,
method:'GET',
success:function(data){
console.log(data);
var div=$('#parent');
div.empty();

    for(var key in data){
        if(key==="Poster"){
            div.append(`<div>${key}: <img src="${data[key]}"> </div>`);
        }
        else{
        div.append(`<div>${key}:${data[key]}</div> `)
        }
    }
},
error:function(error_data){
console.log('error');
console.log(error_data)
}
})

})

