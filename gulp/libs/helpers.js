(function() {

  module.exports = {
    executePromisesBasedOnEnvironment: executePromisesBasedOnEnvironment,
    log: log,
    logEnd: logEnd,
    logError: logError,
    logStart: logStart,
    sequentiallyExecutePromiseQueue: sequentiallyExecutePromiseQueue,
    showError: showError
  };

  /**
   * Some computers are slower than others. If you run all the tasks in the
   * promise in parallel, you can run the risk of crashing the gulp
   * process because too many threads are going on.
   * @param  {promise} promiseQueue
   * @param  {Function} callback
   * @return {Function} promiseHandler
   */
  function executePromisesBasedOnEnvironment(promiseQueue, callback) {
    var qArray = [];

    // Blitz if we are in dev
    if (devEnvironment) {
      _.forEach(promiseQueue, function(promise) {
        qArray.push(promise());
      });
      Q.all(qArray).then(function() {
        return callback.call();
      });

      // One at a time for normal people
    } else {
      Libs.helpers.sequentiallyExecutePromiseQueue(promiseQueue, 0, function() {
        return callback.call();
      });
    }
  }

  /**
   * Generic log statement
   * @param  {string} str
   * @return {void}
   */
  function log(str) {
    return gulpUtil.log(gulpUtil.colors.white(str));
  }

  /**
   * End of log statement
   * @param  {string} str
   * @return {void}
   */
  function logEnd(name) {
    return gulpUtil.log(gulpUtil.colors.blue("(completed) - " + name));
  }

  /**
   * Error log statement
   * @param  {string} str
   * @return {void}
   */
  function logError(err) {
    return gulpUtil.log(gulpUtil.colors.red(err));
  }

  /**
   * Log starting statement
   * @param  {string} str
   * @return {void}
   */
  function logStart(name) {
    return gulpUtil.log(gulpUtil.colors.green("Started: " + name));
  }

  /**
   * Execute promises in a queue one by one
   * @param  {array} promiseQueue
   * @param  {int} index [the index of the promiseQueue array]
   * @param  {Function} callback
   * @return {void}
   */
  function sequentiallyExecutePromiseQueue(promiseQueue, index, callback) {
    if (index >= promiseQueue.length) {
      return callback.call();
    }
    promiseQueue[index]()
      .then(function() {
        Libs.helpers.sequentiallyExecutePromiseQueue(promiseQueue, index+1, callback);
      });
  }

  /**
   * Show an error with lots of exclamation points
   * @param  {string} msg
   * @return {void}
   */
  function showError(msg){
    gulpUtil.log(gulpUtil.colors.red(msg));
  }

})();