import React from "react";
import { useAdBlockDetect } from "../hooks/useAdBlockDetect";

export const AdBlockWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  const { adBlockEnabled } = useAdBlockDetect();

  return <>{adBlockEnabled && { children }}</>;
};
