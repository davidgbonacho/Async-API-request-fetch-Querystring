
function makeCall() {

    let params = 'param1=value1&param2=value2';
    /* this is the same as
    let params = new URLSearchParams();
    params.append("param1", "value1");
    params.append("param2", "value2");*/

    let options = {
        method: 'POST',
        body: params,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }

    fetch('php/service.php', options)
        .then(response => response.json())
        .then(value => document.getElementById("res").innerHTML = runObject(value))
        .catch(err => console.warn('Error: ', err));

        
/*     fetch('php/service.php', {
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
    }); */

}


function runObject(object) {

    let content = '';
    for (var key in object) {
        // recursive, jic
        if (typeof object[key] === 'object') {
            content += runObject(object[key]);
        } else {
            content += key + ' ' + object[key] + ' ';
        }
    }

    return content;
}







