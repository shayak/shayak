function getXmlHttpRequest()
{
    return window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHttp");
}

function makeRequest(method, path, headers, body)
{
    var xmlhttp = getXmlHttpRequest();

    xmlhttp.open(method, path);
    for (var key in headers)
    {
        if (headers.hasOwnProperty(key))
        {
            xmlhttp.setRequestHeader(headers);
        }
    }

    xmlhttp.send(body);
}
