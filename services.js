(function () {
    'use strict';

    angular.module('App.Services', [])
        .service('ParseService', function ($http) {

            var baseURL = "https://api.parse.com/1/";
            var authenticationHeaders = PARSE__HEADER_CREDENTIALS;

            // these are functions exposed to public
            return {
                /**
                 * default function for logging in user
                 */
                login: function () {

                    var settings = {
                        //dont get this part below
                        headers: authenticationHeaders,
                        // params are for query string parameters
                        // dont get this part below
                        params: {
                            "username": "admin",
                            "password": "test"
                        }
                    };

                    // $http returns a promise, which has a then function,
                    // which also returns a promise
                    return $http.get(baseURL + 'login', settings)
                        .then(function (response) {
                            // In the response resp.data contains the result
                            // check the console to see all of the data returned
                            console.log('login', response);
                            return response.data;
                        });
                },
                /**
                 * returns all of the data
                 */
                getAllObjects: function (_id) {

                    var settings = {
                        headers: authenticationHeaders
                    };

                    // $http returns a promise, which has a then function,
                    // which also returns a promise
                    return $http.get(baseURL + 'classes/stuff/', settings)
                        .then(function (response) {
                            // In the response resp.data contains the result
                            // check the console to see all of the data returned
                            console.log('getAllObjects', response);
                            return response.data;
                        });
                },
                /**
                 * returns individual object by Id
                 */
                getObjectById: function (_id) {

                    var settings = {
                        headers: authenticationHeaders
                    };

                    // $http returns a promise, which has a then function,
                    // which also returns a promise
                    return $http.get(baseURL + 'classes/stuff/' + _id, settings)
                        .then(function (response) {
                            // In the response resp.data contains the result
                            // check the console to see all of the data returned
                            console.log('getObjectById', response);
                            return response.data;
                        });
                },
                

                addObject: function (_params) {

                	var settings = {
                		headers: authenticationHeaders
                	};

                	var dataObject = {
                		"name": _params.name,
                		"room": _params.room,
                		//why is room not blue like name

                	};

                	var dataObjectString = JSON.stringify(dataObject);

                	return $http.post(baseURL + 'classes/stuff' + settings, dataObjectString)
                		.then(function (response) {

                			console.log('addObject', response);
                			return response.data


                		});
                },

                updateObject: function (_params) {

                	var settings = {
                		headers: authenticationHeaders
                	};

                	var dataObject = {
                		"name": (_params.name ? _params.name : JSON.null),
                		"room": (_params.room ? _params.room : JSON.null)
                		//why is this like this
                	};

                	var dataObjectString= JSON.stringify(dataObject);

                	var apiURL = baseURL + 'classes/stuff/' + _params.objectId;

                	return $http.put(apiURL, dataObjectString, settings)
                		.then(function (response) {

                			console.log('updateObject', response);
                			return response.data

                		});
                },

                deleteObjectbyId: function (_id) {
                	//why is this now id rather than _params
                	var settings = {
                		headers: authenticationHeaders
                	};

                	return $http.delete(baseURL + 'classes/stuff/' + _id, settings)
                		.then(function (response) {

                			console.log('deleteObjectbyId', response);
                			return response.data	
                		});
                },
            }

        })
})();
