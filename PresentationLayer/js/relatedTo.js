$(document).ready(function(){
    let parameters = getUrlParams(location.search);
    let rid = parameters['rid'];
    let type = parameters['type'];
    let rolename = parameters['n'];

    //set title     
    document.title = 'Centro Corradini - related to ' + localStorage.getItem('rolename');
    $('#groupContainer>h1').text('Services related to '+localStorage.getItem('rolename'));

    //Set and write Breadcrumb
    let path = JSON.parse(localStorage.getItem('breadcrumb'));
    path[3] = 'Related Services';
    localStorage.setItem('breadcrumb',JSON.stringify(path));

    writeBreadcrumb(path);

    //fetch from the apis
    fetch('../crrdn/roles/'+rid+'/relatedto?type='+type).then(response=>{
        return response.json();
    }).then(json=>{
        var stringToWrite;
        if(json.length == 0){
            stringToWrite = '<h2>Ops... Nothing Found!</h2><p>It seems that there are no results for the object you are trying to retrieve.</p>';
            $('#groupContainer').append(stringToWrite);    
        }else{
            json.forEach(element => {
                var hrefString = '"../services/service.html?sid='+element['sid']+'$type='+element['type']+'"';
                stringToWrite = '<li><a href='+ hrefString +'>'+element['servicename']+'</a></li>';
                $('#groupContainer>ul').append(stringToWrite);
            });
        }
    }).catch(error=>{
        var stringToWrite = '<h2>Ops... An error Occurred!</h2><p>It seems that an error occurred!</p>';
        $('#groupContainer').append(stringToWrite);
    });




});