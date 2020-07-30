import { useEffect, useState } from "react";

export const useDetectAdBlock = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  useEffect(() => {
    const adToDetect = document.createElement("div");
    adToDetect.innerHTML = "&nbsp;";
    adToDetect.className = "adsbox";
    document.body.appendChild(adToDetect);

    if (adToDetect?.offsetHeight === 0) {
      setAdBlockDetected(true);
    }

    return adToDetect.remove();
  }, []);

  return adBlockDetected;
};
