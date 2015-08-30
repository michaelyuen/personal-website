angular.module('customFilters', [])

//Capitalize First Letter of word or every word in array
.filter('capitalizeFirstLetter', function() {
    return function(input) {

        if(input == undefined){
            return;
        }

        if(Array.isArray(input)){

            var new_array = [];

            for(var i=0; i<input.length; i++){
                var string = input[i];
                new_array[i]   = string[0].toUpperCase() + string.substr(1);
            }

            return new_array;
        }
        else{
            return input[0].toUpperCase() + input.substr(1);
        }

    };
})

/* 
 * Returns an array of length "n", this can be used to run ngRepeat on an integer.
 * Example: i in [] | repeatNTimes:business.averageRating track by $index
 */
.filter('repeatNTimes', function() {
    return function(array, n) {

        //Round number to integer if needed
        if(n == undefined)
            n = 0;
        else
            n = Math.round(n);

      return new Array(n);
    };
})


/*
 * Turns an array into a comma separated list with the last item ending in a period.
 * Example: ["Apples", "Oranges", "Carrots"] ==> "Apples, Oranges, Carrots."
 */
.filter('commaSeparatedList', function(){

    return function(array){

        if(!Array.isArray(array)){
            return array;
        }

        return array.join(", ") + ".";
    };
})



/*
 * Adds protocol (//) in front of a link if does not exist
 */
.filter('addProtocol', function(){

    return function(url){

        if(url.indexOf("http") == -1){
            return "//" + url;
        }
        else{
            return url;
        }
    };

})


/* 
Format phonenumber as: c (xxx) xxx-xxxx
    or as close as possible if phonenumber length is not 10
    if c is not '1' (country code not USA), does not use country code
*/
.filter('phonenumber', function() {

    
    return function (number) {
        /* 
        @param {Number | String} number - Number that will be formatted as telephone number
        Returns formatted number: (###) ###-####
            if number.length < 4: ###
            else if number.length < 7: (###) ###

        Does not handle country codes that are not '1' (USA)
        */
        if (!number) { return ''; }

        number = String(number);

        // Will return formattedNumber. 
        // If phonenumber isn't longer than an area code, just show number
        var formattedNumber = number;

        // if the first character is '1', strip it out and add it back
        var c = (number[0] == '1') ? '1 ' : '';
        number = number[0] == '1' ? number.slice(1) : number;

        // # (###) ###-#### as c (area) front-end
        var area = number.substring(0,3);
        var front = number.substring(3, 6);
        var end = number.substring(6, 10);

        if (front) {
            formattedNumber = (c + "(" + area + ") " + front);  
        }
        if (end) {
            formattedNumber += ("-" + end);
        }
        return formattedNumber;
    }
})


.filter('notInArray', function($filter){
    return function(list, arrayFilter, element){
        if(arrayFilter){
            return $filter("filter")(list, function(listItem){
                if (element) {
                    return arrayFilter.indexOf(listItem[element]) == -1;
                }
                else{
                    return arrayFilter.indexOf(listItem) == -1;   
                }
            });
        }
    };
})

//Similiar to limitTo but will add "..."" at the end and only run if length exceeds limit
.filter('summary', function($filter){
    return function(text, limit){
        if(text && text.length > limit){
            return $filter('limitTo')(text, limit) + "...";
        }
        else{
            return text;
        }
    };
});