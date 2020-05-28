$(document).ready(function(){
    let parameters = getUrlParams(location.search);
    let rid = parameters['rid'];
    let pid = parameters['pid'];
    let sid = parameters['sid'];
    let eid = parameters['eid'];
    let job = parameters['job'];
    let sez = parameters['sez'];
    let type = parameters['type'];
    let month = parameters['month'];
    let apiString = "";
    let page = ""; 
    let targetPage = "";
    //set title     
    document.title = 'Centro Corradini - ' + sez;
    
    //Set and write Breadcrumb
    let path = JSON.parse(localStorage.getItem('breadcrumb'));
    path[3] = sez;
    localStorage.setItem('breadcrumb',JSON.stringify(path));
    writeBreadcrumb(path);


    // MANAGING THE ROLES TRANSITION LINKS

    if(rid){
        page = '../roles/role.html';
        apiString = '../crrdn/roles/'+rid+'/'+sez;
        $('#back').attr('href','../roles/role.html?rid='+rid+'&type='+type);
        if(sez == 'relatedTo'){
            targetPage = '../services/service.html';
            //fetch from the apis
            fetch(apiString).then(response=>{
                return response.json();
            }).then(json=>{
                var stringToWrite;
                if(json.length == 0){
                    stringToWrite = '<h2>Ops... Nothing Found!</h2><p>It seems that there are no results for the object you are trying to retrieve.</p>';
                    $('#groupContainer').append(stringToWrite);    
                }else{
                    json.forEach(element => {
                        var hrefString = '"' + targetPage + '?sid='+element['sid']+'&type=' + element['type']+'"';
                        stringToWrite = '<li><a href='+ hrefString +'>'+element['servicename']+'</a></li>';
                        $('#groupContainer>ul').append(stringToWrite);
                    });
                }
            }).catch(error=>{
                var stringToWrite = '<h2>Ops... An error Occurred!</h2><p>It seems that an error occurred!</p>';
                $('#groupContainer').append(stringToWrite);
            });
        }
    }

    // MANAGING THE SERVICES TRANSITION LINKS
    if(sid){
        page = '../services/service.html';
        apiString = '../crrdn/services/'+sid +'/'+sez;
        $('#back').attr('href','../services/service.html?sid='+sid+'&type='+type);
        if(sez=='presentedIn'){
            targetPage = '../events/event.html';
            //fetch from the apis
            fetch(apiString).then(response=>{
                return response.json();
            }).then(json=>{
                var stringToWrite;
                if(json.length == 0){
                    stringToWrite = '<h2>Ops... Nothing Found!</h2><p>It seems that there are no results for the object you are trying to retrieve.</p>';
                    $('#groupContainer').append(stringToWrite);    
                }else{
                    json.forEach(element => {
                        var hrefString = '"' + targetPage + '?eid='+element['eid']+'&month=' + element['month']+'"';
                        stringToWrite = '<li><a href='+ hrefString +'>'+element['eventname']+'</a></li>';
                        $('#groupContainer>ul').append(stringToWrite);
                    });
                }
            }).catch(error=>{
                var stringToWrite = '<h2>Ops... An error Occurred!</h2><p>It seems that an error occurred!</p>';
                $('#groupContainer').append(stringToWrite);
            });
        }else if(sez == 'involving'){
            targetPage = '../people/person.html';
            //fetch from the apis
            fetch(apiString).then(response=>{
                return response.json();
            }).then(json=>{
                var stringToWrite;
                if(json.length == 0){
                    stringToWrite = '<h2>Ops... Nothing Found!</h2><p>It seems that there are no results for the object you are trying to retrieve.</p>';
                    $('#groupContainer').append(stringToWrite);    
                }else{
                    json.forEach(element => {
                        //NEED TO FIND PERSON JOB HERE
                        var hrefString = '"' + targetPage + '?pid='+element['pid']+'&job=' + element['job']+'"';
                        stringToWrite = '<li><a href='+ hrefString +'>'+element['fistname']+' '+element['lastname']+'</a></li>';
                        $('#groupContainer>ul').append(stringToWrite);
                    });
                }
            }).catch(error=>{
                var stringToWrite = '<h2>Ops... An error Occurred!</h2><p>It seems that an error occurred!</p>';
                $('#groupContainer').append(stringToWrite);
            });
        }
    }

    
    if(pid){
        page = '../people/person.html';
        apiString = '../crrdn/people/'+pid +'/'+sez;
        $('#back').attr('href','../people/person.html?pid='+pid+'&job='+job);
        if(sez == 'contactFor'){
            targetPage = '../events/event.html';
            //fetch from the apis
            fetch(apiString).then(response=>{
                return response.json();
            }).then(json=>{
                var stringToWrite;
                if(json.length == 0){
                    stringToWrite = '<h2>Ops... Nothing Found!</h2><p>It seems that there are no results for the object you are trying to retrieve.</p>';
                    $('#groupContainer').append(stringToWrite);    
                }else{
                    json.forEach(element => {
                        var hrefString = '"' + targetPage + '?eid='+element['eid']+'&month=' + element['month']+'"';
                        stringToWrite = '<li><a href='+ hrefString +'>'+element['eventname']+'</a></li>';
                        $('#groupContainer>ul').append(stringToWrite);
                    });
                }
            }).catch(error=>{
                var stringToWrite = '<h2>Ops... An error Occurred!</h2><p>It seems that an error occurred!</p>';
                $('#groupContainer').append(stringToWrite);
            });
        }else if(sez == 'involvedIn'){
            targetPage = '../services/service.html';
            //fetch from the apis
            fetch(apiString).then(response=>{
                return response.json();
            }).then(json=>{
                var stringToWrite;
                if(json.length == 0){
                    stringToWrite = '<h2>Ops... Nothing Found!</h2><p>It seems that there are no results for the object you are trying to retrieve.</p>';
                    $('#groupContainer').append(stringToWrite);    
                }else{
                    json.forEach(element => {
                        var hrefString = '"' + targetPage + '?sid='+element['sid']+'&type=' + element['type']+'"';
                        stringToWrite = '<li><a href='+ hrefString +'>'+element['servicename']+'</a></li>';
                        $('#groupContainer>ul').append(stringToWrite);
                    });
                }
            }).catch(error=>{
                var stringToWrite = '<h2>Ops... An error Occurred!</h2><p>It seems that an error occurred!</p>';
                $('#groupContainer').append(stringToWrite);
            });
        }else if(sez == 'role'){
            targetPage = '../roles/role.html';
            //fetch from the apis
            fetch(apiString).then(response=>{
                return response.json();
            }).then(json=>{
                var stringToWrite;
                if(json.length == 0){
                    stringToWrite = '<h2>Ops... Nothing Found!</h2><p>It seems that there are no results for the object you are trying to retrieve.</p>';
                    $('#groupContainer').append(stringToWrite);    
                }else{
                    json.forEach(element => {
                        let t;
                        if(element['freeroles']>0){
                            t = 'free';
                        }else{
                            t = 'all';
                        }
                        var hrefString = '"' + targetPage + '?rid='+element['rid']+'&type=' + t +'"';
                        stringToWrite = '<li><a href='+ hrefString +'>'+element['rolename']+'</a></li>';
                        $('#groupContainer>ul').append(stringToWrite);
                    });
                }
            }).catch(error=>{
                var stringToWrite = '<h2>Ops... An error Occurred!</h2><p>It seems that an error occurred!</p>';
                $('#groupContainer').append(stringToWrite);
            });
        }
    }

    
    if(eid){
        page = '../events/event.html';
        apiString = '../crrdn/events/'+eid +'/'+sez;
        $('#back').attr('href','../events/event.html?eid='+eid+'&month='+formatNumber(month));
        if(sez == 'contact'){
            targetPage = '../people/person.html';
            //fetch from the apis
            fetch(apiString).then(response=>{
                return response.json();
            }).then(json=>{
                var stringToWrite;
                if(json.length == 0){
                    stringToWrite = '<h2>Ops... Nothing Found!</h2><p>It seems that there are no results for the object you are trying to retrieve.</p>';
                    $('#groupContainer').append(stringToWrite);    
                }else{
                    json.forEach(element => {
                        //WE NEED TO FIND THE PERSON JOB HERE
                        var hrefString = '"' + targetPage + '?pid='+element['pid']+'&job=' + element['job']+'"';
                        stringToWrite = '<li><a href='+ hrefString +'>'+element['firstname']+' '+element['lastname']+'</a></li>';
                        $('#groupContainer>ul').append(stringToWrite);
                    });
                }
            }).catch(error=>{
                var stringToWrite = '<h2>Ops... An error Occurred!</h2><p>It seems that an error occurred!</p>';
                $('#groupContainer').append(stringToWrite);
            });
        }else if(sez == 'presents'){
            targetPage = '../services/service.html';
            //fetch from the apis
            fetch(apiString).then(response=>{
                return response.json();
            }).then(json=>{
                var stringToWrite;
                if(json.length == 0){
                    stringToWrite = '<h2>Ops... Nothing Found!</h2><p>It seems that there are no results for the object you are trying to retrieve.</p>';
                    $('#groupContainer').append(stringToWrite);    
                }else{
                    json.forEach(element => {
                        var hrefString = '"' + targetPage + '?sid='+element['pid']+'&type=' + element['type']+'"';
                        stringToWrite = '<li><a href='+ hrefString +'>'+element['servicename']+'</a></li>';
                        $('#groupContainer>ul').append(stringToWrite);
                    });
                }
            }).catch(error=>{
                var stringToWrite = '<h2>Ops... An error Occurred!</h2><p>It seems that an error occurred!</p>';
                $('#groupContainer').append(stringToWrite);
            });
        }
    }
    
    console.log(apiString);
});