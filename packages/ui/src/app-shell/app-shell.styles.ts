import { styled } from "../theme/stitches.config";


export const Wrapper = styled('div', {
    display: 'flex',
    width: '100%',  
    alignItems: 'stretch',
    height: 'calc(100vh - $headerHeight)'
  
});

export const Content = styled('div', {
    width: "100%",
    p: '0 0 20px 0',
    minHeight: 'calc(100vh - $header-height)',
    transition: 'all 0.3s',
    backgroundColor: '$bg1',
    overflowY: 'auto',
    overflowX: 'hidden'
  
})