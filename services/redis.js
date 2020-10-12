/** @format */

const redis = require("redis");
const config = require("./redisConf");
// const { host, port } = config;

const client = redis.createClient(config);

client.on("ready", () => {
  console.log("redis is ready");
});

client.on("end", (err) => {
  console.log("end", err);
});

client.on("error", (err) => {
  console.log(err);
});

client.on("connect", () => {
  console.log("redis connect success!");
});

const setValue = (key, value) => {
  if (typeof value === "string") {
    client.set(key, value);
  } else if (typeof value === "object") {
    for (let item in value) {
      client.hmset(key, item, value[item], redis.print);
    }
  }
};

// 获取string
const getValue = (key) => {
  return new Promise((resolve, reject) => {
    client.get(key, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

// 获取hash
const getHValue = (key) => {
  return new Promise((resolve, reject) => {
    client.hgetall(key, function(err, value) {
      if (err) {
        reject(err);
      } else {
        resolve(value);
      }
    });
  });
};

module.exports = { client, setValue, getValue, getHValue };
