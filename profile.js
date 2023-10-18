const axios = require("axios");
const hidemyacc = new (require("./hidemyacc"))();
const Start = async () => {
  const res = await hidemyacc.profiles();
  console.log(res.data);
};
Start();
