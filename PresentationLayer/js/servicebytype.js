$(document).ready(function(){
    let parameters = getUrlParams(location.search);
    let type = parameters['type'];
    let apiString = '../crrdn/services?type=' + type;
    let maxLimit = 3;
    let offset = 0;
    let typesList = JSON.parse(localStorage.getItem('typesList'));
    console.log(type);


    if(!typesList){
        typesList = [];
        //You have to fetch
        fetch('../crrdn/servTypes').then(response=>{
            return response.json();
        }).then(json=>{
            json.forEach(element => {
                typesList.push(element['type']);
            });
            localStorage.setItem('typesList',JSON.stringify(typesList));
        }).catch(error=>{
            console.log(error);
        });
    }


    //Setting the titles
    $('#elementContainer h1').text(type + ' Services');
    document.title = 'Centro Corradini - ' + type + ' Services';

    //Modify and Write the Breadcrumb
    let path = JSON.parse(localStorage.getItem('breadcrumb'));
    if(path.length == 1){
        path.push(type+' Services');
    }else if(path.length > 1){
        path = ['Services'];
        path[1] = type +' Services';
    }
    localStorage.setItem('breadcrumb',JSON.stringify(path));
    writeBreadcrumb(path);

    //Setting the buttons for the menu
    console.log(typesList)
    if((typesList.indexOf(type) - 1) < 0 ){
        $('#previous').addClass('disabled');
        $('#previous').removeAttr('href');
    }else{
        $('#previous').attr('href','servicebytype.html?type='+ typesList[typesList.indexOf(type)-1]);
    }

    if((typesList.indexOf(type) + 1) >= typesList.length){
        $('#next').addClass('disabled');
        $('#next').removeAttr('href');
    }else{
        $('#next').attr('href','servicebytype.html?type='+ typesList[typesList.indexOf(type)+1]); 
    }


    if(parameters['offset']){
        offset = parameters['offset'];
    }

    fetch(apiString).then(response => {
        return response.json();
    }).then(json =>{
        //Populate
        for(var t = 0; t != maxLimit; ++t){
            var index = t+offset*maxLimit;
            if(index >= json.length){
                continue;
            }
            var stringToWrite = json[index]['servicename'];
      
            var divToWrite = '<div class="groupElement">\
            <div class="groupImage"><img src="../images/'+json[index]['type']+'.jpg"></div>\
            <h3><a href="service.html?sid='+ json[index]['sid'] +'&type='+ json[index]['type'] +'">'+stringToWrite+'</a></h3>\
            <p>'+ getGeneralDescription(json[index]['description']) +'</p>';
            
            $('#elementContainer').append(divToWrite);
        }

        //Set the paging
        $('#elementContainer').append('<ul class="pagination pagination-sm"></ul>');
        for(var i = 0; i != json.length; ++i){
            if(i%maxLimit == 0){
            let hrefString = '"./servicesbytype.html?offset='+Math.floor(i/maxLimit)+'"';
            if(Math.floor(i/maxLimit) != offset){
                $('ul.pagination').append('<li><a href='+ hrefString +'>'+ (Math.floor(i/maxLimit)+1) +'</a></li>');
            }else{
                $('ul.pagination').append('<li><a id="selected" href='+ hrefString +'>'+ (Math.floor(i/maxLimit)+1) +'</a></li>');
            }
            }
        }
    }).cat
});