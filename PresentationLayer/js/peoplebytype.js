let jobsList = ['collaborators','assistants','Sponsor']

$(document).ready(function(){
    let parameters = getUrlParams(location.search);
    let job = parameters['job'];
    let apiString = '../crrdn/people?job='+job;
    let maxLimit = 3;
    let offset = 0;

    if(parameters['offset']){
        offset = parameters['offset'];
    }
    
    //Write titles
    $("#elementContainer h1").text('Our ' + capitalize(job));
    document.title = 'Centro Corradini - '+ $('#elementContainer h1').text();

    //Write Breadcrumb
    let path = JSON.parse(localStorage.getItem('breadcrumb'));
    if(path.length == 1){
        path.push('Our '+ capitalize(job));
    }else if(path.length > 1){
        path = ['Events'];
        path[1] = 'Our '+ capitalize(job);
    }
    localStorage.setItem('breadcrumb',JSON.stringify(path));
    writeBreadcrumb(path);


    //Next and Previous Buttons
    console.log(jobsList)
    if((jobsList.indexOf(job) - 1) < 0 ){
        $('#previous').addClass('disabled');
        $('#previous').removeAttr('href');
    }else{
        $('#previous').attr('href','peoplebytype.html?type='+ jobsList[typesList.indexOf(job)-1]);
    }

    if((jobsList.indexOf(job) + 1) >= jobsList.length){
        $('#next').addClass('disabled');
        $('#next').removeAttr('href');
    }else{
        $('#next').attr('href','peoplebytype.html?type='+ jobsList[jobsList.indexOf(job)+1]); 
    }



    //Fetch the DB with apiString
    fetch(apiString).then(response=>{
        return response.json();
    }).then(json=>{
        //Populate
        for(var t = 0; t != maxLimit; ++t){
            var index = t+offset*maxLimit;
            if(index >= json.length){
                continue;
            }
            var stringToWrite = json[index]['firstname'] + ' ' + json[index]['lastname'];
      
            var divToWrite = '<div class="person">\
                                <div class="portrait"><img src="../images/mock.png"></div>\
                                <div><a href="person.html?pid='+json[index]['pid']+'&job='+job+'">'+stringToWrite+'</a></div>\
                            </div>';
            
            $('#elementContainer').append(divToWrite);
        }

        $('#elementContainer').append('<span class="clear"></span>');


        $('#elementContainer').append('<ul class="pagination pagination-sm"></ul>');
        //Do the pagination
        let numberOfPeople = json.length;
        for(var i = 0; i != numberOfPeople; ++i){
            if(i%maxLimit == 0){
                let hrefString = '"./peoplebytype.html?job='+ job +'&limit='+maxLimit+'&offset='+Math.floor(i/maxLimit)+'"';
                if(Math.floor(i/maxLimit) != offset){
                    $('ul.pagination').append('<li><a href='+ hrefString +'>'+ (Math.floor(i/maxLimit)+1) +'</a></li>');
                }else{
                    $('ul.pagination').append('<li><a id="selected" href='+ hrefString +'>'+ (Math.floor(i/maxLimit)+1) +'</a></li>');
                }
            }
        }
    }).catch(error =>{
        console.log("ERROR: in fetching the DB with" + apiString);
        var divToWrite = '<div>\
                            <h2>Ops... Something went wrong!</h2>\
                            <p>It seems like there\'s been an error in retrieving the data!</p>\
                        </div>';
            
        $('#elementContainer').append(divToWrite);

    });
});