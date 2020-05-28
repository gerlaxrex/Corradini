//Function for mapping the Query string in the URL
//Used within getUrlParams(urlOrQueryString) function
function _mapUrlParams(queryString) {
    return queryString    
        .split('&') 
        .map(function(keyValueString) { return keyValueString.split('=') })
        .reduce(function(urlParams, [key, value]) {
        if (Number.isInteger(parseInt(value)) && parseInt(value) == value) {
            urlParams[key] = parseInt(value);
        } else {
            urlParams[key] = decodeURI(value);
        }
        return urlParams;
        }, {});
}


//Function for creating a json with the query string parts
function getUrlParams(urlOrQueryString) {
    if ((i = urlOrQueryString.indexOf('?')) >= 0) {
        const queryString = urlOrQueryString.substring(i+1);
        if (queryString) {
        return _mapUrlParams(queryString);
        } 
    }

    return {};
}

//Extract the general description from the single description of a role/service/event for the type
function getGeneralDescription(description){
    var generalDescription = "";
    var len = '//'.length;
    if((i = description.indexOf('//')) >= 0 ){
        generalDescription = description.substring(i+len);
    }
    return generalDescription;
}

//Get the specific description
function getSpecificDescription(description){
    let specificDescription = description;
    if((i = description.indexOf('//')) >= 0){
        specificDescription = description.substring(0,i);
    }

    if((j = specificDescription.indexOf('Activities: ')) >= 0){
        specificDescription = specificDescription.substring(0,j);
    }

    if((k = specificDescription.indexOf('Assignments: ')) >= 0){
        specificDescription = specificDescription.substring(0,k);
    }

    if((z = specificDescription.indexOf('Interests: ')) >= 0){
        specificDescription = specificDescription.substring(0,z);
    }

    return specificDescription;
}

//For getting the Activities from an event description
function getActivities(description){
    var activities = "";
    var len = 'Activities: '.length;
    if((i = description.indexOf('Activities: ')) >= 0 ){
        activities = description.substring(i+len);
    }
    return activities;
}

//For getting the Assignments from the description of a service
function getAssignments(description){
    var generalDescription = "";
    var len = 'Assignments: '.length;
    if((i = description.indexOf('Assignments: ')) >= 0 ){
        generalDescription = description.substring(i+len);
    }
    return generalDescription;
}

//For getting the Assignments from the description of a service
function getSponsors(description){
    var generalDescription = "";
    var len = 'Sponsors: '.length;
    if((i = description.indexOf('Sponsors: ')) >= 0 ){
        generalDescription = description.substring(i+len);
    }
    return generalDescription;
}

//Function for getting the interests from the description of a person
function getInterests(description){
    var Interests = "";
    var len = 'Interests: '.length;
    if((i = description.indexOf('Interests: ')) >= 0 ){
        Interests = description.substring(i+len);
    }
    return Interests;
}

function capitalize(string){
    return string[0].toUpperCase() + string.slice(1);
}


//Function for the write of the Breadcrumb
function writeBreadcrumb(array){
    var string = "> ";
    array.forEach(element => {
        string += element + ' > ';
    });
    $('.breadcumb').text(string);
}


//Function for the correct formatting of the integer
function formatNumber(num){
    if(num<10){
        return '0'+ num;
    }
    return num;
}

//List of all months
let monthsList = ['January','February','March','April','May','June','July','August','September','October','November','December'];

//list for all the types
let typesList = [];

//function for formatting a timestamp coming from the DB
function formatTimestamp(timestamp,mod){
    var date = new Date(timestamp);
    var year = date.getFullYear();
    var month = monthsList[date.getMonth()];
    var day = formatNumber(date.getDate());
    var hours = formatNumber(date.getHours());
    var minutes = formatNumber(date.getMinutes());
    var time = hours + ':' + minutes;
    if(mod == 'D M Y'){
        return day + ' ' + month + ' ' + year;
    }else if(mod == 'D M Y T'){
        return day + ' ' + month + ' ' + year + ' ' + time;
    }else if(mod == 'T'){
        return time;
    }else{
        return date;
    }
}


