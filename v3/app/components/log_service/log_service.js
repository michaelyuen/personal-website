app.service('logService', function() {

    this.warning   = {type:"",message:"", isNew:false}; 
    var self       = this;
    var generic    = "Something went wrong. Please try again.";

    //Inititialize service
    function init(){

        // Extend Parse Object
        Parse.Object.extend({
            className: "log",
            initialize: function(){
                parseDot(this, [  
                    //Define the columns you want to cache here
                    'type',
                    'message'
                ]);
            }
        });

    }

    /* Logs message to parse and/or sets warning variable to display it to user.
     * 
     * Example:
     * Show warning and log to parse: logService.log("error", "Test", true, true);
     */
    this.log = function(type, message, logOnParse, displayToUser){

        if(logOnParse){
            var log = new Parse.Object("log");
            log.type = type;
            log.message = message;
            log.save();
        }

        if(displayToUser){
            self.warning.type    = type;
            self.warning.message = (message == 'generic' ? generic : message);
            self.warning.isNew   = true;
        }
    }

    init();

});