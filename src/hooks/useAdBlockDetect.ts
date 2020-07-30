import { useEffect, useState } from "react";

export const useAdBlockDetect = () => {
  const [adBlockEnabled, setAdblockEnabled] = useState(false);

  useEffect(() => {
    const adCheck = document.createElement("div");
    adCheck.innerHTML = "&nbsp;";
    adCheck.className = "adsbox";
    document.body.appendChild(adCheck);

    if (adCheck?.offsetHeight === 0) {
      setAdblockEnabled(true);
    }

    return adCheck.remove();
  }, []);

  return { adBlockEnabled };
};
