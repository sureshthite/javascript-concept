/**
 * 
 * Callback function implementation
 *  
 */

function fetchData(callback) {
  setTimeout(() => {
    console.log("fetchData method called")
    callback();
  }, 2000);
}

fetchData(() => {
  console.log("callback executed");
});