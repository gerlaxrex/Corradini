let list = ['free','all'];


$(document).ready(function(){    
    let parameters = getUrlParams(location.search); //extracts the parameters in the query URL
    let maxLimit = 3; //max limit of role per page
    let type = parameters['type'];
    let apiString = '../crrdn/roles?type=' + type; //uri to use for the Restful services
    let offset = 0;

    //Setting the title for the page
    document.title = 'Centro Corradini - ' + capitalize(type) + ' Roles';    
    
    if(parameters['offset']){
      offset = parseInt(parameters['offset']);
    }

    //SETTING THE LINK TO THE NEXT GROUP AND SETTING THE BREADCUMB
    let i = list.indexOf(type);
    $("#nextOrPrevious").attr('href','./rolesbytype.html?type=' + list[(i + 1)%list.length]);
    if(i == list.length-1){
        $("#nextOrPrevious").text('Previous type');
    }

    $('#elementContainer h1').text(capitalize(type) + ' Roles');
    
    var path = JSON.parse(localStorage.getItem('breadcrumb'));

    if(!path){
      path = ['Roles'];
    }

    if(path.length == 1){
      path.push(capitalize(type) + ' Roles');
    }else if(path.length > 1){
      path = ['Roles'];
      path[1] = capitalize(type) + ' Roles';
    }

    writeBreadcrumb(path);

    localStorage.setItem('breadcrumb',JSON.stringify(path));





    console.log(apiString);
    // Compute the number of results.
    fetch(apiString).then((response) =>{
      return response.json();
    }).then((json)=>{
      //Populate
      for(var t = 0; t != maxLimit; ++t){
        var index = t+offset*maxLimit;
        if(index >= json.length){
            continue;
        }

        var element = json[index];
  
        var refToRole = 'role.html?rid='+element['rid']+'&type='+type+'&sez=description';  
        var divToWrite = '<div class="groupElement"> \
              <div class="groupImage"><img src="../images/farm.jpg" alt="farm"></div> \
              <h3><a href="'+ refToRole +'">'+element['rolename']+'</a></h3> \
              <p>'+ getGeneralDescription(element['description']) +'</p> \
              <p>Free positions: <span class="counter">'+element['freeroles']+'</span></p> \
          </div>';
          
        $('#elementContainer').append(divToWrite);
    }


      //Do the pagination
      $('#elementContainer').append('<ul class="pagination pagination-sm" aria-label="pagination"></ul>');
      let numberOfRoles = json.length;
      for(var i = 0; i != numberOfRoles; ++i){
        if(i%maxLimit == 0){
          let hrefString = '"./rolesbytype.html?type='+ type +'&limit='+maxLimit+'&offset='+Math.floor(i/maxLimit)+'"';
          if(Math.floor(i/maxLimit) != offset){
            $('ul.pagination').append('<li><a href='+ hrefString +'>'+ (Math.floor(i/maxLimit)+1) +'</a></li>');
          }else{
            $('ul.pagination').append('<li><a id="selected" href='+ hrefString +'>'+ (Math.floor(i/maxLimit)+1) +'</a></li>');
          }
        }
      }
    })/*.then(()=>{
      //Fetch the results for the displayed page
      fetch(apiString + '&limit=' + maxLimit + '&offset=' + offset*maxLimit).then((response)=>{
        return response.json();
      }).then((json) => {
        json.forEach(element => {
          var refToRole = 'role.html?rid='+element['rid']+'&type='+type+'&sez=description';  
          var divToWrite = '<div class="groupElement"> \
                <div class="groupImage"><img src="../images/farm.jpg"></div> \
                <h3><a href="'+ refToRole +'">'+element['rolename']+'</a></h3> \
                <p>'+ getGeneralDescription(element['description']) +'</p> \
                <p>Free positions: <span class="counter">'+element['freeroles']+'</span></p> \
            </div>';
            
          $('#elementContainer').append(divToWrite);  
        });
      });
    });*/.catch(error=>{
            divToWrite = '<div class="groupElement">\
            <div class="groupImage"><img src="../images/farm.jpg"></div>\
            <h3>Ops... an error occurred!</h3>\
            <p>It seems that an error occurred in the retrieving of data!</p>';
        $('#elementContainer').append(divToWrite);
      });
  });