import styled from 'styled-components';

export const myimg = styled.img`
display:${props => (props.pathlocation === 'language' ? 'none' : '')}
`
export const myh1 = styled.h1`
display:${props => (props.pathlocation === 'language' ? 'none !important' : '')}
`

export const myh1Language = styled.h1`
    display:${props => (props.pathlocation !== 'language' ? 'none !important' : 'flex')};
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
            max-width: 257px;
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



