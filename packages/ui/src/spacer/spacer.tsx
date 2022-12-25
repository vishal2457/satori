import React from "react";
import { StyledSpacer } from "./spacer.styles";

export const Spacer = ({
  x,
  y,
  l,
  r,
  t,
  b,
}: {
  x?: number;
  y?: number;
  l?: number;
  r?: number;
  t?: number;
  b?: number;
}) => {
  const mx = React.useMemo(() => {
    let dflt = 2;
    if (l || r) {
      dflt = 0;
    }
    return x ? x : dflt;
  }, [x, l, r]);

  const my = React.useMemo(() => {
    let dflt = 2;
    if (t || b) {
      dflt = 0;
    }
    return y ? y : dflt; 
  }, [y, t, b]);

  const makeCSS  = React.useMemo(() => {
      let obj: {
          mx?:number
          my?:number
          ml?:number
          mr?:number
          mt?: number
          mb?: number
      } = {};
      if(l) {
          obj.ml = l;
      }
      if(r) {
          obj.mr = r;
      }
      if(t) {
          obj.mt = t;
      }
      if(b) {
          obj.mb = b;
      }
      if(mx) {
          obj.mx = mx
      }
      if(my) {
          obj.my = my;
      }
    return obj
  }, [mx, my, l,r,t,b])

  return <StyledSpacer css={makeCSS}></StyledSpacer>;
}
