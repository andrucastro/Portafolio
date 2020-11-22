
const link ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02' 

function getJSON(url){

return fetch(url)
    .then(function(response){
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            return response.json();
        }
    })

    .catch(function(error) {
        console.log(error);
    });

}

getJSON(link)