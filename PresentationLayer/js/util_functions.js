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

function getUrlParams(urlOrQueryString) {
    if ((i = urlOrQueryString.indexOf('?')) >= 0) {
        const queryString = urlOrQueryString.substring(i+1);
        if (queryString) {
        return _mapUrlParams(queryString);
        } 
    }

    return {};
}

function getGeneralDescription(description){
    const generalDescription = "";
    if((i = description.indexOf('//')) >= 0 ){
        generalDescription = description.substring(i+1);
    }
    return generalDescription;
}
