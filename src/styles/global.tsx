import { css } from "@emotion/react";

export const globalStyles = css`
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  body {
    background: var(--joy-palette-common-black, #000);
    color: var(--joy-palette-primary-solidColor);
  }
`;
