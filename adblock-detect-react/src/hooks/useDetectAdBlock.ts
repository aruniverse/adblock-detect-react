import { useEffect, useState } from "react";

export const useDetectAdBlock = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  useEffect(() => {
    // grab a domain from https://github1s.com/gorhill/uBlock/blob/master/docs/tests/hostname-pool.js
    const url = "https://www3.doubleclick.net";
    fetch(url, {
      method: "HEAD",
      mode: "no-cors",
      cache: "no-store",
    })
      .then((res) => {
        if (process.env.NODE_ENV !== "production") {
          console.log(res);
        }
      })
      .catch((err) => {
        if (process.env.NODE_ENV !== "production") {
          console.log(err);
        }
        setAdBlockDetected(true);
      });
  }, []);

  return adBlockDetected;
};
