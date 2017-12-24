import React from 'react';

import { fontFamily } from './Variables';

export default () => (
  <React.Fragment>
    <title>Henry Kaufman</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
    <style dangerouslySetInnerHTML={{
      __html: `body{
        font-family:${fontFamily};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      };`
    }} />
  </React.Fragment>
);
