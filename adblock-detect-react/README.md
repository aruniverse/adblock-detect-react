# adblock-detect-react

[![npm version](https://badge.fury.io/js/adblock-detect-react.svg)](https://www.npmjs.com/package/adblock-detect-react)
![Publish Status](https://github.com/aruniverse/adblock-detect-react/workflows/Publish%20Package%20Pipeline/badge.svg)

## Description

Provides utilities to check if ad block is enabled on a page via either a React hook or a wrapper component.

## Example Usage

### useDetectAdBlock hook

```tsx
import React from "react";
import { useDetectAdBlock } from "adblock-detect-react";

const SomeFunctionalComponent = () => {
  const adBlockDetected = useDetectAdBlock();

  React.useEffect(() => {
    if (adBlockDetected) {
      window.alert("ad block detected");
    }
  }, []);

  return <div>{adBlockDetected && "Hello Ad Blocked Page"}</div>;
};
```

### AdBlockDetectedWrapper component

```tsx
import React from "react";
import { AdBlockDetectedWrapper } from "adblock-detect-react";

const SomeFunctionalComponent = () => {
  return (
    <AdBlockDetectedWrapper>
      <div>{"Hello Ad Blocked Page"}</div>
    </AdBlockDetectedWrapper>
  );
};
```
