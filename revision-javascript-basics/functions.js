let printPlace = function( {place} ){
    console.log(place);
}

let arrowprint = ({place}) => {
    return place;
};
data = {place : 'Mumbai',  direction : 'north'};
printPlace(data);
console.log(arrowprint(data));
