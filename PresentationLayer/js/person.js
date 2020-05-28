let sections = ['generalities and Interests','pictures'];

$(document).ready(function(){
    let parameters = getUrlParams(location.search);
    let pid = parameters['pid'];
    let job = parameters['job'];
    let sez = sections[0];

    if(parameters['sez']){
        sez = parameters['sez'];
    }

    let apiString = '../crrdn/people/'+pid+'?job='+job;
    console.log(apiString);

    //Read the Path for the breadcrumb and for the page positioning
    let path = JSON.parse(localStorage.getItem('breadcrumb'));
    if(!path){
        path = [];
        path[0] = 'People';
        path[1] = 'Our ' + capitalize(job);
    }

    //Set the Back button to the right page.
    $("#back").attr('href','./peoplebytype.html?job='+job)
    $("#back").text('Up to ' + path[1]);

    //Set the link for the other sections
    var i = sections.indexOf(sez);
    for(let k = 0; k != sections.length; ++k){
        $("#section"+k).attr('href','service.html?pid='+pid+'&job='+job+'&sez='+sections[(i+k+1)%sections.length]);
        $("#section"+k).text(capitalize(sections[(i+k+1)%sections.length]));
    }

    //Set the transition links
    $("#contactFor").attr('href','../transition.html?pid='+ pid +'&job='+ job +'&sez=contactFor');
    $("#involvedIn").attr('href','../transition.html?pid='+ pid +'&job='+ job +'&sez=involvedIn');
    $("#role").attr('href','../transition.html?pid='+ pid +'&job='+ job +'&sez=role');

    if(sez == 'generalities and Interests'){
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
                    path.push(capitalize(element['firstname']+' '+element['lastname']));
                    path.push(capitalize(sez));
                }else{
                    path[2] = capitalize(element['firstname']+' '+element['lastname']);
                    path[3] = capitalize(sez);
                }
            
                stringToWrite = '<div class="portrait-large"><img src="../images/mock.png"></div>\
                                    <h1>'+element['firstname'] +' '+element['lastname']+'</h1>\
                                    <h2>Generalities</h2>\
                                    <p><b>Age: </b>'+element['age']+'<br>\
                                    <b>e-mail: </b>'+element['email']+'<br>\
                                    <b>phone: </b>'+element['phonenumber']+'<br>\
                                    <b>Description: </b><br>\
                                    '+getSpecificDescription(element['description'])+'</p>\
                                    <h2>Interests</h2>\
                                    <p>'+getInterests(element['description'])+'</p>\
                                    <span class="clear"></span>';
            }

            $('#elementContainer').html(stringToWrite);
            localStorage.setItem('breadcrumb',JSON.stringify(path));
            writeBreadcrumb(path);
        }).catch(error =>{
            console.log(error);
        });
    }else if(sez == 'pictures'){
        //Fetch the imagePerson table from the DB through the relative endpoint!
    }else{
        console.log("Sorry, not recognized section.");
    }
});