$(document).ready(()=>{      
    document.title = "Centro Corradini - Events"
    localStorage.setItem('breadcrumb',JSON.stringify(['Events']));
    let path = JSON.parse(localStorage.getItem('breadcrumb'));
    let parameters = getUrlParams(location.search);
    let maxLimit = 3;
    let offset = 0;
    let actualMonth = new Date().getMonth();
    console.log(actualMonth);
    
    //Write the breadcrumb
    writeBreadcrumb(path);
    
    if(parameters['offset']){
        offset = parameters['offset'];
    }


    
    for(var month = 0; month != maxLimit; ++month){
      var stringToWrite = monthsList[(actualMonth+month+offset*maxLimit)%12];
      
      if(actualMonth > (actualMonth+month+offset*maxLimit)%12){
        stringToWrite += ' (' + (new Date().getFullYear()+1) + ')';
      }

      if(actualMonth == (actualMonth+month+offset*maxLimit)%12){
        stringToWrite = 'This Month';
      }

      var divToWrite = '<div class="groupElement">\
      <div class="groupImage"><img src="../images/farm.jpg"></div>\
      <h3><a href="eventsbymonth.html?month='+ formatNumber((actualMonth+month+offset*maxLimit)%12 +1) +'">'+stringToWrite+'</a></h3>\
      <p>'+monthsList[(actualMonth+month+offset*maxLimit)%12]+'\'s events.</p>';
      
      $('#groupContainer').append(divToWrite);
      
    }

    $('#groupContainer').append('<ul class="pagination pagination-sm"></ul>');
    //Set the paging
    for(var i = 0; i != monthsList.length; ++i){
        if(i%maxLimit == 0){
          let hrefString = '"./allevents.html?offset='+Math.floor(i/maxLimit)+'"';
          if(Math.floor(i/maxLimit) != offset){
            $('ul.pagination').append('<li><a href='+ hrefString +'>'+ (Math.floor(i/maxLimit)+1) +'</a></li>');
          }else{
            $('ul.pagination').append('<li><a id="selected" href='+ hrefString +'>'+ (Math.floor(i/maxLimit)+1) +'</a></li>');
          }
        }
    }
});




