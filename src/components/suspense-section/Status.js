import React from "react";

const loadStatus = (function () {
  let error, response;
  const promise = new Promise((resolves) => setTimeout(resolves, 3000))
    .then(() => (response = "success"))
    .catch((e) => (error = e));
  return function () {
    if (error) throw error;
    if (response) return response;
    throw pending;
  };
})();

export function Status() {
  const status = loadStatus();
  return <h1>Status: {status}</h1>;
}
