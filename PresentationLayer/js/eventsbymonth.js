$(document).ready(()=>{
    let parameters = getUrlParams(location.search);
    let month = Number(parameters['month']) -1; //number of month for the array format!
    let actualMonth = new Date().getMonth(); //current month
    let maxLimit = 3;
    let offset = 0;
    if(parameters['offset']){
        offset = parameters['offset'];
    }
    let apiString = '../crrdn/events?month='+formatNumber(Number(month)+1);

    //Change page title and heading
    document.title = 'Centro Corradini - ' + monthsList[month] + '\'s Events'; 
    $('#elementContainer>h1').text('Events in '+monthsList[month]);


    //Set the Previous and Next buttons links
    var nextNumber = (Number(parameters['month']))%12 + 1;
    var previousNumber = (Number(parameters['month'])-1)%12;
    if(previousNumber <= 0) previousNumber = 12;
    
    $('#previous').attr('href','eventsbymonth.html?month='+formatNumber(previousNumber));
    $('#next').attr('href','eventsbymonth.html?month='+formatNumber(nextNumber));    
    if(actualMonth === month){
        $('#previous').addClass('disabled');
        $('#previous').removeAttr('href');
    }
    if(month === (actualMonth - 1)%12){
        $('#next').addClass('disabled');
        $('#next').removeAttr('href');
    }

    //Modify and Write the Breadcrumb
    let path = JSON.parse(localStorage.getItem('breadcrumb'));
    if(path.length == 1){
        path.push(monthsList[month]+'\'s Events');
    }else if(path.length > 1){
        path = ['Events'];
        path[1] = monthsList[month] + '\'s Events';
    }
    localStorage.setItem('breadcrumb',JSON.stringify(path));
    writeBreadcrumb(path);



    //Pagination and Fetching the DB for events in a month
    fetch(apiString).then(response=>{
        return response.json();
    }).then(json => {

        //Populate
        for(var t = 0; t != maxLimit; ++t){
            var index = t+offset*maxLimit;
            if(index >= json.length){
                continue;
            }

            var element = json[index];
      
            divToWrite = '<div class="groupElement">\
                    <div class="groupImage"><img src="../images/farm.jpg"></div>\
                    <h3><a href="event.html?eid='+element['eid']+'&month='+formatNumber(parameters['month'])+'">'+element['eventname']+'</a></h3>\
                    <p><b>Date</b>: '+formatTimestamp(element['begintime'],'D M Y')+'</p>';

            $('#elementContainer').append(divToWrite);
        }


        //Do the pagination
        $('#elementContainer').append('<ul class="pagination pagination-sm"></ul>');
        let numberOfEvents = json.length;
        for(var i = 0; i != numberOfEvents; ++i){
            if(i%maxLimit == 0){
                let hrefString = '"./eventsbymonth.html?month='+ month +'&limit='+maxLimit+'&offset='+Math.floor(i/maxLimit)+'"';
                if(Math.floor(i/maxLimit) != offset){
                    $('ul.pagination').append('<li><a href='+ hrefString +'>'+ (Math.floor(i/maxLimit)+1) +'</a></li>');
                }else{
                    $('ul.pagination').append('<li><a id="selected" href='+ hrefString +'>'+ (Math.floor(i/maxLimit)+1) +'</a></li>');
                }
            }
        }
    })/*.then(()=>{
        //Now fetch the data from the DB
        fetch(apiString+'&limit='+maxLimit+'&offset='+offset).then(response=>{
            return response.json();
        }).then(json=>{
            let divToWrite;
            if(json.length <= 0 ){
                divToWrite = '<div class="groupElement">\
                <div class="groupImage"><img src="../images/farm.jpg"></div>\
                <h3>Ops... nothing found!</h3>\
                <p>It seems that the events you were searching are not there!</p>';
                $('#elementContainer').append(divToWrite);
            }else{
                json.forEach(element => {
                    divToWrite = '<div class="groupElement">\
                    <div class="groupImage"><img src="../images/farm.jpg"></div>\
                    <h3><a href="event.html?eid='+element['eid']+'&month='+formatNumber(parameters['month'])+'">'+element['eventname']+'</a></h3>\
                    <p><b>Date</b>: '+formatTimestamp(element['begintime'],'D M Y')+'</p>';

                    $('#elementContainer').append(divToWrite);
                });
            }
        })*/.catch(error=>{
            divToWrite = '<div class="groupElement">\
                <div class="groupImage"><img src="../images/farm.jpg"></div>\
                <h3>Ops... an error occurred!</h3>\
                <p>It seems that an error occurred in the retrieving of data!</p>';
            $('#elementContainer').append(divToWrite);
        });
    //});
});