import styled from 'styled-components';

const mySection = styled.section`
align-items:${props => (props.pathlocation === 'about' ? 'flex-start !important' : '')};
height:${props => (props.pathlocation === 'about' ? '138px !important' : '')};
@media(min-width:768px){
    height:${props => (props.pathlocation === 'about' ? '155px !important' : '')};
}
`

const myBtnContainer = styled.div`
@media(min-width:768px){
    width:${props => (props.pathlocation === 'about' ? '218px !important' : '')};
    height:${props => (props.pathlocation === 'about' ? '65px !important' : '')};
    margin:${props => (props.pathlocation === 'about' ? '12px 0 0 0 !important' : '')};
}
`

const myBtn = styled.button`
background-color:${props => (props.pathlocation === 'about' ? 'var(--red) !important' : '')};
font-size:${props => (props.pathlocation === 'about' ? '1rem !important' : '')};
margin:${props => (props.pathlocation === 'about' ? '0 0 20px 0 !important' : '')};
@media(min-width:768px){
    font-size:${props => (props.pathlocation === 'about' ? '1.25rem !important' : '')};
}
`
const myPapersContainer = styled.div`
@media(min-width:768px){
    bottom:${props => (props.pathlocation === 'about' ? 'unset !important' : '')};
    right:${props => (props.pathlocation === 'about' ? '19% !important' : '')};
    margin:${props => (props.pathlocation === 'about' ? '96px 0 0 0 !important' : '')};
}
`


export const MySection = mySection;
export const MyBtnContainer = myBtnContainer;
export const MyBtn = myBtn;
export const MyPapersContainer = myPapersContainer;
