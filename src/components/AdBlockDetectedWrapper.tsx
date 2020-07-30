import React from "react";
import { useAdBlockDetect } from "../hooks/useAdBlockDetect";

export const AdBlockDetectedWrapper = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const { adBlockEnabled } = useAdBlockDetect();

  return <>{adBlockEnabled && { children }}</>;
};
