/*
 * Creates dot style access to properties on the parse object.
 * Example:
 * item.title               --> will now call item.get('title')
 * item.title = "New Title" --> will now call item.set('title', 'New Title');
 *
 */
function parseDot(object, columns){

   columns.map(function(prop){

        Object.defineProperty(object, prop,{
            get: function(){
                return object.get(prop);
            },
            set: function(val){
                return object.set(prop, val);
            },
            configurable: true
        });

    });

}

//Calls the init function of the parse class after the deep copy. 
function angularParseCopy(source, destination){
    angular.copy(source, destination);
    destination.initialize();
}