let sections = ['description','place and Activities'];

$(document).ready(function(){
    let parameters = getUrlParams(location.search);
    let sid = parameters['sid'];
    let type = parameters['type'];
    let sez = sections[0];

    if(parameters['sez']){
        sez = parameters['sez'];
    }

    let apiString = '../crrdn/services/'+sid+'?type='+type;
    console.log(apiString);

    //Read the Path for the breadcrumb and for the page positioning
    let path = JSON.parse(localStorage.getItem('breadcrumb'));
    if(!path){
        path = [];
        path[0] = 'Services';
        path[1] = capitalize(type) + ' Services';
    }

    //Set the Back button to the right page.
    $("#back").attr('href','./servicebytype.html?type='+type)
    $("#back").text('Up to ' + path[1]);

    //Set the link for the other sections
    var i = sections.indexOf(sez);
    for(let k = 0; k != sections.length; ++k){
        $("#section"+k).attr('href','service.html?sid='+sid+'&type='+type+'&sez='+sections[(i+k+1)%sections.length]);
        $("#section"+k).text(capitalize(sections[(i+k+1)%sections.length]));
    }

     //Set the transition links
     $("#presentedIn").attr('href','../transition.html?sid='+ sid +'&type='+type +'&sez=presentedIn');
     $("#involving").attr('href','../transition.html?sid='+ sid +'&type='+type +'&sez=involving');

    //Retrieve Data from the DB
    fetch(apiString).then(response => {
        return response.json();
    }).then(json => {
        let stringToWrite;
        let element = json[0];
        if(json.length <= 0){
            stringToWrite = '<h1>Ops... Nothing found!</h1>\
            <p> It seems like there is no result for the actual search!</p>\
            <div class="imagesTop"><img src="../images/orto3.jpg"/></div>';
        }else{
            if(path.length == 2){
                path.push(capitalize(element['servicename']));
                path.push(capitalize(sez));
            }else{
                path[2] = capitalize(element['servicename']);
                path[3] = capitalize(sez);
            }

            if(sez == 'description'){
                stringToWrite = '<h1>'+json[0]['servicename']+'</h1>\
                <h2>Type</h2>\
                <div class="typeTag">'+element['type']+'</div>\
                <h2> Description </h2>\
                <p>'+ getSpecificDescription(element['description']) +'</p>\
                <div class="imagesTop"><img src="../images/orto3.jpg"/></div>';
            }else if(sez == 'place and Activities'){
                stringToWrite = '<h1>'+element['servicename']+'</h1>\
                <h2>Place</h2>\
                <p>'+ element['place']+'</p>\
                <h2> Activities </h2>\
                <p>'+ getActivities(element['description']) +'</p>\
                <div class="imagesTop"><img src="../images/orto3.jpg"/></div>';
            }
        }
        $('#elementContainer').html(stringToWrite);
        localStorage.setItem('breadcrumb',JSON.stringify(path));
        writeBreadcrumb(path);
    }).catch(error =>{
        console.log(error);
    });
});