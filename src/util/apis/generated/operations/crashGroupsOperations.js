/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');
var msRest = require('ms-rest');
var WebResource = msRest.WebResource;

/**
 * @class
 * CrashGroupsOperations
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AppCenterClient.
 * Initializes a new instance of the CrashGroupsOperations class.
 * @constructor
 *
 * @param {AppCenterClient} client Reference to the service client.
 */
function CrashGroupsOperations(client) {
  this.client = client;
}

/**
 * Gets a stacktrace for a specific crash
 *
 * @param {string} crashGroupId id of a specific group
 * 
 * @param {string} ownerName The name of the owner
 * 
 * @param {string} appName The name of the application
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {boolean} [options.groupingOnly] true if the stacktrace should be
 * only the relevant thread / exception. Default is false
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object.
 *                      See {@link Stacktrace} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
CrashGroupsOperations.prototype.getStacktrace = function (crashGroupId, ownerName, appName, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  var groupingOnly = (options && options.groupingOnly !== undefined) ? options.groupingOnly : false;
  // Validate
  try {
    if (crashGroupId === null || crashGroupId === undefined || typeof crashGroupId.valueOf() !== 'string') {
      throw new Error('crashGroupId cannot be null or undefined and it must be of type string.');
    }
    if (groupingOnly !== null && groupingOnly !== undefined && typeof groupingOnly !== 'boolean') {
      throw new Error('groupingOnly must be of type boolean.');
    }
    if (ownerName === null || ownerName === undefined || typeof ownerName.valueOf() !== 'string') {
      throw new Error('ownerName cannot be null or undefined and it must be of type string.');
    }
    if (appName === null || appName === undefined || typeof appName.valueOf() !== 'string') {
      throw new Error('appName cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var baseUrl = this.client.baseUri;
  var requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/{owner_name}/{app_name}/crash_groups/{crash_group_id}/stacktrace';
  requestUrl = requestUrl.replace('{crash_group_id}', encodeURIComponent(crashGroupId));
  requestUrl = requestUrl.replace('{owner_name}', encodeURIComponent(ownerName));
  requestUrl = requestUrl.replace('{app_name}', encodeURIComponent(appName));
  var queryParameters = [];
  if (groupingOnly !== null && groupingOnly !== undefined) {
    queryParameters.push('grouping_only=' + encodeURIComponent(groupingOnly.toString()));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          var resultMapper = new client.models['Failure']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['Stacktrace']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};

/**
 * Gets a specific group
 *
 * @param {string} crashGroupId id of a specific group
 * 
 * @param {string} ownerName The name of the owner
 * 
 * @param {string} appName The name of the application
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object.
 *                      See {@link CrashGroup} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
CrashGroupsOperations.prototype.get = function (crashGroupId, ownerName, appName, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (crashGroupId === null || crashGroupId === undefined || typeof crashGroupId.valueOf() !== 'string') {
      throw new Error('crashGroupId cannot be null or undefined and it must be of type string.');
    }
    if (ownerName === null || ownerName === undefined || typeof ownerName.valueOf() !== 'string') {
      throw new Error('ownerName cannot be null or undefined and it must be of type string.');
    }
    if (appName === null || appName === undefined || typeof appName.valueOf() !== 'string') {
      throw new Error('appName cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var baseUrl = this.client.baseUri;
  var requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/{owner_name}/{app_name}/crash_groups/{crash_group_id}';
  requestUrl = requestUrl.replace('{crash_group_id}', encodeURIComponent(crashGroupId));
  requestUrl = requestUrl.replace('{owner_name}', encodeURIComponent(ownerName));
  requestUrl = requestUrl.replace('{app_name}', encodeURIComponent(appName));

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          var resultMapper = new client.models['Failure']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['CrashGroup']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};

/**
 * Updates a group
 *
 * @param {string} crashGroupId id of a specific group
 * 
 * @param {string} ownerName The name of the owner
 * 
 * @param {string} appName The name of the application
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {object} [options.status]
 * 
 * @param {string} [options.annotation]
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object.
 *                      See {@link CrashGroup} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
CrashGroupsOperations.prototype.update = function (crashGroupId, ownerName, appName, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  var status = (options && options.status !== undefined) ? options.status : undefined;
  var annotation = (options && options.annotation !== undefined) ? options.annotation : undefined;
  // Validate
  try {
    if (crashGroupId === null || crashGroupId === undefined || typeof crashGroupId.valueOf() !== 'string') {
      throw new Error('crashGroupId cannot be null or undefined and it must be of type string.');
    }
    if (ownerName === null || ownerName === undefined || typeof ownerName.valueOf() !== 'string') {
      throw new Error('ownerName cannot be null or undefined and it must be of type string.');
    }
    if (appName === null || appName === undefined || typeof appName.valueOf() !== 'string') {
      throw new Error('appName cannot be null or undefined and it must be of type string.');
    }
    if (status !== null && status !== undefined && typeof status !== 'object') {
      throw new Error('status must be of type object.');
    }
    if (annotation !== null && annotation !== undefined && typeof annotation.valueOf() !== 'string') {
      throw new Error('annotation must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }
  var group;
  if ((status !== null && status !== undefined) || (annotation !== null && annotation !== undefined)) {
      group = new client.models['CrashGroupChange']();
      group.status = status;
      group.annotation = annotation;
  }

  // Construct URL
  var baseUrl = this.client.baseUri;
  var requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/{owner_name}/{app_name}/crash_groups/{crash_group_id}';
  requestUrl = requestUrl.replace('{crash_group_id}', encodeURIComponent(crashGroupId));
  requestUrl = requestUrl.replace('{owner_name}', encodeURIComponent(ownerName));
  requestUrl = requestUrl.replace('{app_name}', encodeURIComponent(appName));

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'PATCH';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  // Serialize Request
  var requestContent = null;
  var requestModel = null;
  try {
    if (group !== null && group !== undefined) {
      var requestModelMapper = new client.models['CrashGroupChange']().mapper();
      requestModel = client.serialize(requestModelMapper, group, 'group');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    var serializationError = new Error(util.format('Error "%s" occurred in serializing the ' + 
        'payload - "%s"', error.message, util.inspect(group, {depth: null})));
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          var resultMapper = new client.models['Failure']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['CrashGroup']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};

/**
 * @summary Gets a list of crashes
 *
 * Gets a list of crashes
 *
 * @param {string} ownerName The name of the owner
 * 
 * @param {string} appName The name of the application
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {date} [options.lastOccurrenceFrom] Earliest date when the last time
 * a crash occured in a crash group
 * 
 * @param {date} [options.lastOccurrenceTo] Latest date when the last time a
 * crash occured in a crash group
 * 
 * @param {string} [options.appVersion] version
 * 
 * @param {string} [options.groupType] Possible values include: 'GroupType1',
 * 'GroupType2'
 * 
 * @param {string} [options.groupStatus] Possible values include: 'open',
 * 'closed', 'ignored'
 * 
 * @param {string} [options.groupTextSearch] A freetext search that matches in
 * crash, crash types, crash stack_traces and crash user
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {array} [result]   - The deserialized result object.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
CrashGroupsOperations.prototype.list = function (ownerName, appName, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  var lastOccurrenceFrom = (options && options.lastOccurrenceFrom !== undefined) ? options.lastOccurrenceFrom : undefined;
  var lastOccurrenceTo = (options && options.lastOccurrenceTo !== undefined) ? options.lastOccurrenceTo : undefined;
  var appVersion = (options && options.appVersion !== undefined) ? options.appVersion : undefined;
  var groupType = (options && options.groupType !== undefined) ? options.groupType : undefined;
  var groupStatus = (options && options.groupStatus !== undefined) ? options.groupStatus : undefined;
  var groupTextSearch = (options && options.groupTextSearch !== undefined) ? options.groupTextSearch : undefined;
  // Validate
  try {
    if (lastOccurrenceFrom && !(lastOccurrenceFrom instanceof Date || 
        (typeof lastOccurrenceFrom.valueOf() === 'string' && !isNaN(Date.parse(lastOccurrenceFrom))))) {
          throw new Error('lastOccurrenceFrom must be of type date.');
        }
    if (lastOccurrenceTo && !(lastOccurrenceTo instanceof Date || 
        (typeof lastOccurrenceTo.valueOf() === 'string' && !isNaN(Date.parse(lastOccurrenceTo))))) {
          throw new Error('lastOccurrenceTo must be of type date.');
        }
    if (appVersion !== null && appVersion !== undefined && typeof appVersion.valueOf() !== 'string') {
      throw new Error('appVersion must be of type string.');
    }
    if (groupType !== null && groupType !== undefined && typeof groupType.valueOf() !== 'string') {
      throw new Error('groupType must be of type string.');
    }
    if (groupStatus !== null && groupStatus !== undefined && typeof groupStatus.valueOf() !== 'string') {
      throw new Error('groupStatus must be of type string.');
    }
    if (groupTextSearch !== null && groupTextSearch !== undefined && typeof groupTextSearch.valueOf() !== 'string') {
      throw new Error('groupTextSearch must be of type string.');
    }
    if (ownerName === null || ownerName === undefined || typeof ownerName.valueOf() !== 'string') {
      throw new Error('ownerName cannot be null or undefined and it must be of type string.');
    }
    if (appName === null || appName === undefined || typeof appName.valueOf() !== 'string') {
      throw new Error('appName cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var baseUrl = this.client.baseUri;
  var requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/{owner_name}/{app_name}/crash_groups';
  requestUrl = requestUrl.replace('{owner_name}', encodeURIComponent(ownerName));
  requestUrl = requestUrl.replace('{app_name}', encodeURIComponent(appName));
  var queryParameters = [];
  if (lastOccurrenceFrom !== null && lastOccurrenceFrom !== undefined) {
    queryParameters.push('last_occurrence_from=' + encodeURIComponent(client.serializeObject(lastOccurrenceFrom)));
  }
  if (lastOccurrenceTo !== null && lastOccurrenceTo !== undefined) {
    queryParameters.push('last_occurrence_to=' + encodeURIComponent(client.serializeObject(lastOccurrenceTo)));
  }
  if (appVersion !== null && appVersion !== undefined) {
    queryParameters.push('app_version=' + encodeURIComponent(appVersion));
  }
  if (groupType !== null && groupType !== undefined) {
    queryParameters.push('group_type=' + encodeURIComponent(groupType));
  }
  if (groupStatus !== null && groupStatus !== undefined) {
    queryParameters.push('group_status=' + encodeURIComponent(groupStatus));
  }
  if (groupTextSearch !== null && groupTextSearch !== undefined) {
    queryParameters.push('group_text_search=' + encodeURIComponent(groupTextSearch));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          var resultMapper = new client.models['Failure']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CrashGroupElementType',
                  type: {
                    name: 'Composite',
                    className: 'CrashGroup'
                  }
              }
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};


module.exports = CrashGroupsOperations;
