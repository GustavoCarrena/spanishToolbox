import styled from 'styled-components';

const myimg = styled.img`
display:${props => (props.pathlocation === 'home') ? 'inline-block !important' : 'none !important'};
`
const myh1 = styled.h1`
display:${props => props.pathlocation === 'language' || props.pathlocation === 'ondemand' ? 'none !important' : ''}
`

const myh1Language = styled.h1`
    display:${props => (props.pathlocation === 'language' || props.pathlocation === 'ondemand') ? 'flex !important' : 'none !important'};
    width: 100vw;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    color: var(--yellow);
    font-family: var(--montserrat-font);
    font-size: 1.65rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6rem;
    letter-spacing: normal;
    text-align: center;
    padding-bottom: 3px;

    @media(min-width: 420px){
        font-size: 1.8rem;
    }
        
        .title{
            width: 90%;
            max-width: 297px;
                @media(min-width: 420px){
                    max-width: 315px;
                }
        }
        
        .line{
            width: 90%;
            max-width: 122px;
            border: solid 1.5px var(--red);
            background-color: var(--red);
            margin-top: 12px;
                @media(min-width: 420px){
                    max-width: 150px;
                }
    }
`

const firstTitleColor = styled.h6`
color:${props => props.pathlocation === 'ondemand' ? 'var(--blue) !important' : ''}
`

const secondTitle = styled.h6`
color:${props => props.pathlocation === 'ondemand' ? 'var(--red) !important' : ''}
`

const secondButton = styled.button`
background-color:${props => props.pathlocation === 'ondemand' ? 'var(--red) !important' : ''}
`

const thirdTitle = styled.h6`
color:${props => props.pathlocation === 'ondemand' ? 'var(--green) !important' : ''}
`
const thirdButton = styled.button`
background-color:${props => props.pathlocation === 'ondemand' ? 'var(--green) !important' : ''}
`

const textContainer = styled.div`
@media(max-width:767px){
    margin:${props => props.pathlocation === 'ondemand' ? '10px 0 33px 0 !important' : ''}
}
`
const textContainerShort = styled.div`
@media(max-width:767px){
    margin:${props => props.pathlocation === 'ondemand' ? '10px 0 30px 0 !important' : ''}
}
`

export const Myimg = myimg;
export const Myh1 = myh1;
export const Myh1Language = myh1Language;
export const FirstTitle = firstTitleColor;
export const SecondTitle = secondTitle;
export const ThirdTitle = thirdTitle;
export const SecondButton = secondButton;
export const ThirdButton = thirdButton;
export const TextContainer = textContainer;
export const TextContainerShort = textContainerShort;

