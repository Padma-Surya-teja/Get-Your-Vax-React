function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;  // distance returned
}
function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

export function SortData(arrObject, locationObject) {
    for (let i = 0; i < arrObject.length; i++) {
        let longitude = parseFloat(locationObject.longitude);
        let latitude = parseFloat(locationObject.latitude);
        let distance = getDistanceFromLatLonInKm(latitude,longitude, arrObject[i].lat,arrObject[i].long);
        //Attaching returned distance from function to array elements
        let pindist = Math.abs(parseFloat(arrObject[i].pincode) - parseFloat(locationObject.pincode));
        arrObject[i].distance = distance;
        arrObject[i].pindist = pindist;
    }
    arrObject.sort(function (a, b) {
        if(a.distance === b.distance){
            return a.pindist - b.pindist;
        }
        return a.distance - b.distance
    });
    
    return arrObject;
}