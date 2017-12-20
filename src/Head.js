import React from 'react';

import { fontFamily } from './Variables';

export default () => (
  <React.Fragment>
    <title>Henry Kaufman</title>
    <style dangerouslySetInnerHTML={{
      __html: `body{
        font-family:${fontFamily};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      };`
    }} />
  </React.Fragment>
);
