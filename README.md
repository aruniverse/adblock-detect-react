# adblock-detect-react

## Description

React hook to check if ad block is enabled on a page.

## Example Usage

### useDetectAdBlock

```tsx
import React from "react";
import { useDetectAdBlock } from "adblock-detect-react";

const SomeFunctionalComponent = () => {
  const adBlockDetected = useDetectAdBlock();

  return <div>{adBlockDetected && "Hello Ad Blocked Page"}</div>;
};
```
