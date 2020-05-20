var sections = ['description','assignments'];

$(document).ready(function(){
    let parameters = getUrlParams(location.search);
    let rid = parameters['rid'];
    let type = parameters['type'];
    let apiString = '../crrdn/roles/' + rid + '?type=' + type
    let sez = parameters['sez'];
    

    //Read the Path for the breadcrumb and for the page positioning
    let path = JSON.parse(localStorage.getItem('breadcrumb'));

    //Set the Back button to the right page.
    $("#back").attr('href','./rolesbytype.html?type='+type)
    $("#back").text('Up to ' + path[1]);

    //Set the link for the other sections
    var i = sections.indexOf(sez);
    for(let k = 0; k != sections.length; ++k){
        $("#section"+k).attr('href','role.html?rid='+rid+'&type='+type+'&sez='+sections[(i+k+1)%sections.length]);
        $("#section"+k).text(capitalize(sections[(i+k+1)%sections.length]));
    }

    //Set the relatedTo link
    $("#relatedto").attr('href','relatedTo.html?rid='+rid +'&type='+type);

    fetch(apiString).then((response)=>{
        return response.json();
    }).then((json)=>{
        localStorage.setItem('rolename',json[0]['rolename']);
        document.title = 'Centro Corradini - ' + localStorage.getItem('rolename');
        if(sez == 'assignments'){
            var elementParts = '<h1>'+ json[0]['rolename'] +'</h1>\
            <h2>Assignments</h2>\
            <p>The main assignments for this role are:\
            <ul>\
                <li>Help managing of the garden</li>\
                <li>Help the guys in the garden</li>\
            </ul>\
            </p>\
            <div class="imagesTop"><img src="../images/orto.jpg"/></div>'; 

            $('#roleContainer').append(elementParts);
            if(path.length == 2){
                path.push(capitalize(json[0]['rolename']));
                path.push('Assignments');
            }else{
                path[2] = capitalize(json[0]['rolename']);
                path[3] = 'Assignments';
            }

        }else if(sez == 'description'){
            var elementParts = '<h1>'+ json[0]['rolename'] +'</h1>\
            <h2>Type:</h2> <span class="typeTag">'+ json[0]['type']+'</span>\
            <h2>Description</h2>\
            <p>'+json[0]['description']+'</p>\
            <div class="imagesTop"><img src="../images/orto.jpg"/></div>'; 

            $('#roleContainer').append(elementParts);
            if(path.length == 2){
                path.push(capitalize(json[0]['rolename']));
                path.push('Description');
            }else{
                path[2] = capitalize(json[0]['rolename']);
                path[3] = 'Description';
            }

        }else{
            var elementParts = '<h1>ERROR</h1>\
            <h2>Error has occurred</h2>\
            <p>An error has occurred: </p>'; 

            $('#roleContainer').append(elementParts);
        }
        }).catch((error)=>{
        console.log("An error Occurred: No role found with this identifier.");
        var elementParts = '<h1>Ops.. nothing found :(</h1>\
            <p>It seems that there are no results for the object you are trying to retrieve.</p>'; 

            $('#roleContainer').append(elementParts);
    }).then(()=>{
        $('.breadcumb').text(path[0] + ' > ' + path[1] + ' > ' + path[2] + ' > ' + path[3]);
    });
});
