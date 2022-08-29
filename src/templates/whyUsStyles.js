import styled from 'styled-components';


export const myimg = styled.img `
display:${props => ((props.pathlocation === 'language' || props.pathlocation === 'ondemand') ? 'flex !important' : 'none !important')};
`

export const mySection = styled.div `
background-color:${props => ((props.pathlocation === 'language' || props.pathlocation === 'ondemand' || props.pathlocation === 'argentine') ? 'var(--blue) !important' : '')}
`

export const mydiv = styled.div `
display:${props => ((props.pathlocation === 'language' || props.pathlocation === 'ondemand') ? 'none !important' : '')};
`

export const myOldh6 = styled.h6 `
display:${props => ((props.pathlocation === 'language' || props.pathlocation === 'ondemand') ? 'none !important' : '')};
display:${props => props.pathlocation === 'argentine' ? 'none !important' : ''};
`

export const myh6 = styled.h6 `
display:${props => ((props.pathlocation === 'language' || props.pathlocation === 'ondemand') ? 'block !important' : (props.pathlocation === 'home' || props.pathlocation === '') ? 'none !important' : '')};
margin-top: 20px;
    @media(max-width:767px){
        font-size: 1.7rem !important;
    }
`

export const myfooter = styled.footer `
display:${props => ((props.pathlocation === 'language' || props.pathlocation === 'ondemand' || props.pathlocation === 'argentine') ? 'none !important' : '')};

`

export const MyImg = myimg;
export const MySection = mySection;
export const MyDiv = mydiv;
export const MyOldh6 = myOldh6;
export const Myh6 = myh6;
export const MyFooter = myfooter;