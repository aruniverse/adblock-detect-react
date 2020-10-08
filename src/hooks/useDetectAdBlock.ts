import { useEffect, useState } from "react";

export const useDetectAdBlock = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  useEffect(() => {
    const adToDetect = document.createElement("div");
    adToDetect.setAttribute(
      "class",
      "googlead pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links"
    );
    adToDetect.setAttribute(
      "style",
      "width: 1px ! important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;"
    );
    document.body.appendChild(adToDetect);

    if (
      window.document.body.getAttribute("abp") !== null ||
      adToDetect.offsetParent === null ||
      adToDetect.offsetHeight == 0 ||
      adToDetect.offsetLeft == 0 ||
      adToDetect.offsetTop == 0 ||
      adToDetect.offsetWidth == 0 ||
      adToDetect.clientHeight == 0 ||
      adToDetect.clientWidth == 0
    ) {
      setAdBlockDetected(true);
    } else if (window.getComputedStyle !== undefined) {
      const adToDetectTemp = window.getComputedStyle(adToDetect, null);
      if (
        adToDetectTemp &&
        (adToDetectTemp.getPropertyValue("display") == "none" ||
          adToDetectTemp.getPropertyValue("visibility") == "hidden")
      ) {
        setAdBlockDetected(true);
      }
    }

    return () => {
      document.body.removeChild(adToDetect);
    };
  }, []);

  return adBlockDetected;
};
