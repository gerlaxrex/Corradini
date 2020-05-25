let sections = ['description','schedule and Sponsors'];

$(document).ready(function(){
    let parameters = getUrlParams(location.search); //get parameters
    let month = Number(parameters['month']) - 1; //get month in array index format
    let eid = parameters['eid'];
    let apiString = '../crrdn/events/'+eid+'?month='+formatNumber(parameters['month']);
    //Set the section of the page (referring to the Dialogue Act selected)
    let sez = 'description';
    if(parameters['sez']){
        sez = parameters['sez'];
    }
    console.log(apiString);

    //Get breadcrumb...
    let path = JSON.parse(localStorage.getItem('breadcrumb'));

    //Set the selection button
    var i = sections.indexOf(sez);
    for(let k = 0; k != sections.length; ++k){
        $("#section"+k).attr('href','event.html?eid='+eid+'&month='+formatNumber(parameters['month'])+'&sez='+sections[(i+k+1)%sections.length]);
        $("#section"+k).text(capitalize(sections[(i+k+1)%sections.length]));
    }

    //Set the Back button to the right page.
    $("#back").attr('href','./eventsbymonth.html?month='+formatNumber(parameters['month']));
    $("#back").text('Up to ' + path[1]);

    $("#contact").attr('href','../transition.html?eid='+eid +'&month='+ month +'&sez=contact');
    $("#presents").attr('href','../transition.html?eid='+eid +'&month='+ month +'&sez=presents');


    //endpoint call
    fetch(apiString).then(response=>{
        return response.json();
    }).then(json => {
        let event = json[0];
        let divToWrite = "";
        
        if(path.length == 2){
            path.push(capitalize(json[0]['eventname']));
            path.push(capitalize(sez));
        }else{
            path[2] = capitalize(event['eventname']);
            path[3] = capitalize(sez);
        }
        
        if(sez === 'description'){
            divToWrite = '<h1>'+event['eventname']+'</h1>\
            <h2> Description </h2>\
            <p>'+event['description']+'</p>\
            <div class="imagesTop"><img src="../images/orto2.jpg"></div>';
        }else if(sez == 'schedule and Sponsors'){
            divToWrite = '<h1>'+event['eventname']+'</h1>\
            <h2> Schedule </h2>\
            <p> <b>Date</b>: '+formatTimestamp(event['begintime'],'D M Y')+'</p>\
            <p> <b>Time</b>: '+formatTimestamp(event['begintime'],'T')+' - '+formatTimestamp(event['endtime'],'T')+'</p>\
            <p>'+event['schedule']+'</p>\
            <h2> Sponsors </h2>\
            <p></p>\
            <div class="imagesTop"><img src="../images/orto2.jpg"></div>';

        }else{
            console.log("Error occurred: wrong section for the page has been selected.");
        }
        $('#elementContainer').html(divToWrite);
        localStorage.setItem('breadcrumb',JSON.stringify(path));
        writeBreadcrumb(path);
    }).catch(error=>{
        console.log("error occurred: Error in fetching data.")
    });






});