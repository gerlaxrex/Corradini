$(document).ready(function(){
    let parameters = getUrlParams(location.search);
    let apiString1 = '../crrdn/servTypes';
    let maxLimit = 3;
    let offset = 0;

    if(parameters['offset']){
        offset = parameters['offset'];
    }

    document.title = 'Centro Corradini - Services'

    //Set and write the breadcrumb
    path = ['Services'];
    localStorage.setItem('breadcrumb',JSON.stringify(path));
    writeBreadcrumb(path);
    typesList = [];
    //Retrieve the various types
    fetch(apiString1).then(response=>{
        return response.json();
    }).then(json=>{
        json.forEach(element => {
            typesList.push(element['type']);
        });
        localStorage.setItem('typesList',JSON.stringify(typesList));
    }).then(()=>{
        //Populate
        for(var t = 0; t != maxLimit; ++t){
            if((t+offset*maxLimit) >= typesList.length){
                continue;
            }
            var stringToWrite = typesList[(t+offset*maxLimit)];
      
            var divToWrite = '<div class="groupElement">\
            <div class="groupImage"><img src="../images/'+stringToWrite+'.jpg"></div>\
            <h3><a href="servicebytype.html?type='+ stringToWrite +'">'+stringToWrite+'</a></h3>\
            <p>'+ stringToWrite +' services.</p>';
            
            $('#groupContainer').append(divToWrite);
        }
        
        //Set the paging
        $('#groupContainer').append('<ul class="pagination pagination-sm"></ul>');
        for(var i = 0; i != typesList.length; ++i){
            if(i%maxLimit == 0){
                let hrefString = '"./allservices.html?offset='+Math.floor(i/maxLimit)+'"';
                if(Math.floor(i/maxLimit) != offset){
                    $('ul.pagination').append('<li><a href='+ hrefString +'>'+ (Math.floor(i/maxLimit)+1) +'</a></li>');
                }else{
                    $('ul.pagination').append('<li><a id="selected" href='+ hrefString +'>'+ (Math.floor(i/maxLimit)+1) +'</a></li>');
                }
            }
        }
    }).catch(error => {
        console.log(error);
    });
});