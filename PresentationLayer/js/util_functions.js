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
    if((i = description.indexOf('//')) >= 0 ){
        generalDescription = description.substring(i+2);
    }
    return generalDescription;
}

function capitalize(string){
    return string[0].toUpperCase() + string.slice(1);
}



function writeBreadcrumb(array){
    var string = "> ";
    array.forEach(element => {
        string += element + ' > ';
    });
    $('.breadcumb').text(string);
}
