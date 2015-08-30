app.service('authService', function($rootScope, userService, logService) {

    // User roles are public, user, and admin
    // For authorization, we check if the user role exists in the defined access level
    var access_levels = {
                        'public' : ['public', 'user', 'admin'],
                        'anon': ['public'],
                        'user' : ['user', 'admin'],
                        'admin': ['admin']
    },
    current_user = userService.getCurrent() || {role: 'public'};

    this.authorize = function (level) {
        if (access_levels[level].indexOf(current_user.role) != -1) {
            return true;
        }
        else{
            return false;
        }
    }

    this.signup = function (user, success, error) {

        // now create the secure data object that will be attached to user
        var secureData = userService.createSecureUser();

        // attach secureData to user
        user.secureUserData = secureData;

        user.signUp(null, {
            success: function (user) {
                // Signup will automatically log in user.
                // We don't want this until the email is verified, so logout immediately
                Parse.User.logOut();
                logService.log('success', 'Signed up: '+ user.email, true, false);
                success(user);
            },
            error: function (user, err) {
                logService.log('error', err.message, true, true);
                error();
            }
        });
    }

    this.login = function (user, success, error) {

        Parse.User.logIn(user.email, user.password, {
            success: function (user) {
                if (user.attributes.emailVerified) {
                    current_user = user;
                    $rootScope.is_logged_in = true;
                    success();
                }
                else {
                    // User logged in, but their email is unverified
                    // Update account with same email to trigger another verification email
                    // Then log them out and notify of reason
                    var email = user.email;
                    user.email = '';
                    user.email = email;

                    userService.updateUser(
                        user,
                        function () {
                            logService.log('error', 'User tried to log in with unverified email: '+ user.email, true, false);
                            Parse.User.logOut();
                            error('Check your email to verify your account and get started.');
                        },
                        function () {
                            Parse.User.logOut();
                            error('The email or password is incorrect. Please try again.');
                        }
                    );
                }
            },
            error: function (user, err) {
                logService.log('error', err.message + ': ' + user.email, true, false);
                error('The email or password is incorrect. Please try again.');
            }
        });
    }

    this.logout = function () {

        Parse.User.logOut();
        $rootScope.is_logged_in = false;
        current_user = {role: 'public'};
    }

    this.pwReset = function (email, success, error) {

        Parse.User.requestPasswordReset(email, {
            success: function () {
                logService.log('success', 'Pw reset requested: '+ email, true, false);
                success();
            },
            error: function (err) {
                logService.log('error', err.message, true, false);
                error();
            }
        })
    }

    this.createTestAccount = function (test_user, success) {

        // now create the secure data object that will be attached to user
        var secureData = userService.createSecureUser();
        secureData.liveBalance = 0;
        secureData.testBalance = 50;

        // attach secureData to user
        test_user.secureData = secureData;

        test_user.signUp(null,
            { success: function (user) {
                current_user = user;
                $rootScope.is_logged_in = true;
                success();  
            },
            error: function (user, error) {
                logService.log('error', err.message, true, false);
            }
        });
    }
});