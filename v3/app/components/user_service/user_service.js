app.service('userService', function(logService) {

    var self = this;

    //Inititialize service
    function init(){

        // Extend Parse Object
        Parse.Object.extend({
            className: "_User",
            initialize: function(){
                parseDot(this, [  
                    //Define the columns you want to cache here
                    'username',
                    'password',
                    'email',
                    'role',
                    'deleted',
                    'secureUserData',
                    'facebookAuthData',
                    'facebookPagesAuthData'
                ]);
            }
        });

        // Extend Parse Object
        Parse.Object.extend({
            className: "secureUserData",
            initialize: function(){
                parseDot(this, [
                    'stripeCustomerId'
                ]);
            }
        });
    }

    this.getCurrent = function () {
        return Parse.User.current();
    }

    this.createUser = function () {
        return new Parse.Object('_User');
    }

    this.createSecureUser = function () {
        return new Parse.Object('secureUserData');
    }

    this.updateUser = function (user, success, error) {

        user.save(null, {
            success: function (updated_user) {
                success();
            },
            error: function (updated_user, err) {
                logService.log('error', err.message, true, false);
                error();
            }
        });
    }

    this.deleteUser = function (user, success, error) {

        //Flag User as deleted and change username to deletedRND#
        user.deleted  = true;
        user.username = "deleted" + Math.random().toString(16);
        user.email    = "deleted" + Math.random().toString(16) + "_" + user.email;
        
        user.save(null,{   
            success: function (deleted_user) {
                logService.log('success', 'Deleted user: '+ deleted_user.email, true, false);
                success();
            },
            error: function (deleted_user, err) {
                logService.log('error', err.message, true, false);
                error();
            }
        });
    }

    this.getUser = function (email, success, error) {

        var query = new Parse.Query('_User');
        query.equalTo('email', email);

        query.first({
            success: function (user) {
                if (user) {
                    success(user);
                }
                else{
                    error();
                } 
            },
            error: function (err) {
                logService.log('error', err.message, true, false);
                error();
            }
        });
    }

    init();
});