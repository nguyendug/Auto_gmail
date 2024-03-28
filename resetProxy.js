const axios = require("axios").default;
const timeout = 120000;
const Promise = require("bluebird");
const url1 = "http://27.78.16.132:60000/27.78.16.132:10204:user10204:g3m4Z";

!(async () => {
  try {
    return await new Promise((resolve, reject) => {
      axios
        .get(url1)
        .then((response) => resolve(response.data))
        .catch(reject);
    }).timeout(timeout);
  } catch (error) {
    console.log(error);
  }
  return null;
});
