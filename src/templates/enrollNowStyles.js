import styled from 'styled-components';

const mySection = styled.section `
align-items:${props => (props.pathlocation === 'about' ? 'flex-start !important' : '')};
height:${props => (props.pathlocation === 'about' ? '170px !important' : '')};
height:${props => (props.pathlocation === 'regular' ? '250px !important' : '')};
display:${props => (props.pathlocation === 'regular' ? 'flex !important' : '')};
flex-flow:${props => (props.pathlocation === 'regular' ? 'column nowrap !important' : '')};
align-items:${props => (props.pathlocation === 'regular' ? 'center !important' : '')};
justify-content:${props => (props.pathlocation === 'regular' ? 'center !important' : '')};
@media(min-width:768px){
    height:${props => (props.pathlocation === 'about' ? '155px !important' : '')};
    height:${props => (props.pathlocation === 'regular' ? '400px !important' : '')};
}
`

const myBtnContainer = styled.div `
display:${props => (props.pathlocation === 'contact' ? 'none !important' : '')};
width:${props => (props.pathlocation === 'about' ? '230px !important' : '')};
margin:${props => (props.pathlocation === 'regular' ? '-40px 0 50px 0 !important' : '')};
height:${props => (props.pathlocation === 'regular' ? '65px !important' : '')};
@media(min-width:768px){
    width:${props => (props.pathlocation === 'about' ? '218px !important' : '')};
    height:${props => (props.pathlocation === 'about' ? '65px !important' : '')};
    margin:${props => (props.pathlocation === 'about' ? '12px 0 0 0 !important' : '')};
    margin:${props => (props.pathlocation === 'regular' ? '-120px 0 50px 0 !important' : '')};
    width:${props => (props.pathlocation === 'regular' ? '250px !important' : '')};
}


`

const myBtn = styled.button `
background-color:${props => (props.pathlocation === 'about' ? 'var(--red) !important' : '')};
font-size:${props => (props.pathlocation === 'about' ? '1.1rem !important' : '')};
margin:${props => (props.pathlocation === 'about' ? '0 0 20px 0 !important' : '')};
margin:${props => (props.pathlocation === 'regular' ? '0 !important' : '')};
background-color:${props => (props.pathlocation === 'regular' ? 'var(--red) !important' : '')};
@media(min-width:768px){
    font-size:${props => (props.pathlocation === 'about' ? '1.25rem !important' : '')};
    margin-top:${props => (props.pathlocation === 'about' ? '-150px !important' : '')};
    z-index:${props => (props.pathlocation === 'about' ? '999 !important' : '')};
}
`
const myPapersContainer = styled.div `
@media(min-width:768px){
    bottom:${props => (props.pathlocation === 'about' ? 'unset !important' : '')};
    right:${props => (props.pathlocation === 'about' ? '19% !important' : '')};
    margin:${props => (props.pathlocation === 'about' ? '96px 0 0 0 !important' : '')};
}
@media(min-width:992px){
    bottom:${props => (props.pathlocation === 'contact' ? 'unset !important' : '')};
    right:${props => (props.pathlocation === 'contact' ? '12% !important' : '')};
    margin:${props => (props.pathlocation === 'contact' ? '-42px 0 0 0 !important' : '')};
    bottom:${props => (props.pathlocation === 'regular' ? 'unset !important' : '')};
    margin-top:${props => (props.pathlocation === 'regular' ? '170px !important' : '')};

}
@media(min-width:1024px){
    right:${props => (props.pathlocation === 'contact' ? '14% !important' : '')};
    margin:${props => (props.pathlocation === 'contact' ? '-94px 0 0 0 !important' : '')};
}

`

const myLampContainer = styled.div `
    display:${props => (props.pathlocation === 'about' ? 'none !important' : '')};
    width:${props => (props.pathlocation === 'contact' ? '80px !important' : '')};
    margin-top:${props => (props.pathlocation === 'contact' ? '22px !important' : '')};
    display:${props => (props.pathlocation === 'regular' ? 'none !important' : '')};
    @media(min-width:768px){
        display:${props => (props.pathlocation === 'about' ? 'flex !important' : '')};
        width:${props => (props.pathlocation === 'about' ? '100px !important' : '')};
        display:${props => (props.pathlocation === 'regular' ? 'block !important' : '')};
        width:${props => (props.pathlocation === 'regular' ? '90px !important' : '')};
        margin-top:${props => (props.pathlocation === 'regular' ? '250px !important' : '')};
    }
    @media(min-width:1024px){
        margin-top:${props => (props.pathlocation === 'contact' ? '40px !important' : '')};
        width:${props => (props.pathlocation === 'contact' ? '110px !important' : '')};
    }
`

const anyDoubtsContainer = styled.div `
display:${props => (props.pathlocation === 'regular' ? 'flex !important' : 'none !important')};
`


export const MySection = mySection;
export const MyBtnContainer = myBtnContainer;
export const MyBtn = myBtn;
export const MyPapersContainer = myPapersContainer;
export const MyLampContainer = myLampContainer;
export const AnyDoubtsContainer = anyDoubtsContainer;