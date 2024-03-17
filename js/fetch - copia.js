
function makeCall() {

    let params = 'param1=value1&param2=value2';
    /* this is the same as
    let params = new URLSearchParams();
    params.append("param1", "value1");
    params.append("param2", "value2");*/
   
    fetch('php/service.php', {
        method: 'POST',
        body: params,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }).then(function (response) {
        return response.json();
    }).then(function (value) {
        document.getElementById("res").innerHTML = runObject(value);
    }).catch(function (err) {
        console.warn('Error: ', err);
    });

}

function runObject(object) {

    let content = '';
    for (var key in object) content += key + ' ' + object[key] + ' ';

    return content;
}


