import React from "react";
import { useDetectAdBlock } from "../hooks/useDetectAdBlock";

export const AdBlockDetectedWrapper = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const adBlockDetected = useDetectAdBlock();

  return <>{adBlockDetected && { children }}</>;
};
