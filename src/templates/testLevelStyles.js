import styled from 'styled-components';


const mydiv = styled.div`
display:${props => (props.pathlocation === 'language' ? 'none !important' : '')}
`

const myimg = styled.img`
display:${props => (props.pathlocation === 'language' ? 'none !important' : '')}
`

const mytestcontainer = styled.div`
position:${props => (props.pathlocation === 'language' ? 'relative' : '')};
top:${props => (props.pathlocation === 'language' ? '97px !important' : '')};

@media(min-width:750px){
    max-width:${props => (props.pathlocation === 'language' ? '230px !important' : '')};
    position:${props => (props.pathlocation === 'language' ? 'relative' : '')};
    top:${props => (props.pathlocation === 'language' ? '0px !important' : '')};
    right:${props => (props.pathlocation === 'language' ? '-23%' : '')};
}
@media(min-width:768px){
    height:${props => (props.pathlocation === 'language' ? '283px !important' : '')};
    margin-top:${props => (props.pathlocation === 'language' ? '118px !important' : '')};
}
@media(min-width:1024px){
    height:${props => (props.pathlocation === 'language' ? '400px !important' : '')};
}
`

const mycontent = styled.div`
margin:${props => (props.pathlocation === 'language' ? '30px 0' : '')};
@media(min-width:750px){
    width:${props => (props.pathlocation === 'language' ? '100% !important' : '')};
    margin:${props => (props.pathlocation === 'language' ? '166px 8% 32px 0px' : '')};
    height:${props => (props.pathlocation === 'language' ? '295px !important' : '')};
}
@media(min-width:768px){
    margin:${props => (props.pathlocation === 'language' ? '0 8% 0 0 !important' : '')};
    height:${props => (props.pathlocation === 'language' ? '295px !important' : '')};
}
@media(min-width:1024px){
    margin:${props => (props.pathlocation === 'language' ? '53px 35% 32px 0px' : '')};
}
`

const myTextYourLevelText = styled.p`
@media(max-width:767px){
    display:${props => (props.pathlocation === 'language' ? 'none !important' : '')};
}

@media(min-width:768px){
    display:${props => (props.pathlocation === 'language' ? 'block !important' : '')};
    font-size:${props => (props.pathlocation === 'language' ? '0.65rem !important' : '')};
    margin-bottom:${props => (props.pathlocation === 'language' ? '15px !important' : '')};
    width:${props => (props.pathlocation === 'language' ? '95% !important' : '')};
}
`

const mysection = styled.section`
background-color:${props => (props.pathlocation === 'language' ? 'transparent !important' : '')};
`

const mycontainer = styled.div`
background-image: ${props => (props.pathlocation === 'language' ? 'url("/assets/img/fotos/levels.jpg") !important' : '')};
background-repeat:${props => (props.pathlocation === 'language' ? 'no-repeat !important' : '')} ;
background-position:${props => (props.pathlocation === 'language' ? 'center center !important' : '')} ;
background-size:${props => (props.pathlocation === 'language' ? 'cover !important' : '')};
width:${props => (props.pathlocation === 'language' ? '100vw !important' : '')};
display: ${props => (props.pathlocation === 'language' ? 'flex !important' : '')};
height:${props => (props.pathlocation === 'language' ? '320px !important' : '')};
@media(min-width:768px){
    height:${props => (props.pathlocation === 'language' ? '517px !important' : '')};
};
@media(min-width:880px){
    height:${props => (props.pathlocation === 'language' ? '580px !important' : '')};
};
@media(min-width:940px){
    height:${props => (props.pathlocation === 'language' ? '681px !important' : '')};
};
@media(min-width:1050px){
    height:${props => (props.pathlocation === 'language' ? '740px !important' : '')};
};
@media(min-width:1200px){
    height:${props => (props.pathlocation === 'language' ? '974px !important' : '')};
};
`

const mytitlecontainer = styled.div`
@media(min-width:1024px){
    width:${props => (props.pathlocation === 'language' ? '260px !important' : '')};
};
`

const myarrowcontainer = styled.div`
@media(min-width:768px){
    width:${props => (props.pathlocation === 'language' ? '86px !important' : '')};
    margin-top:${props => (props.pathlocation === 'language' ? '209px !important' : '')};
    right:${props => (props.pathlocation === 'language' ? '5% !important' : '')};
};
@media(min-width:820px){
    right:${props => (props.pathlocation === 'language' ? '7% !important' : '')};
}
@media(min-width:960px){
    right:${props => (props.pathlocation === 'language' ? '10% !important' : '')};
}
@media(min-width:1024px){
    right:${props => (props.pathlocation === 'language' ? '12% !important' : '')};
    margin-top:${props => (props.pathlocation === 'language' ? '56px !important' : '')};
}
@media(min-width:1024px){
    right:${props => (props.pathlocation === 'language' ? '9% !important' : '')};
    margin-top:${props => (props.pathlocation === 'language' ? '90px !important' : '')};
}
@media(min-width:1100px){
    right:${props => (props.pathlocation === 'language' ? '10% !important' : '')};
}
@media(min-width:1200px){
    right:${props => (props.pathlocation === 'language' ? '12% !important' : '')};
}
@media(min-width:1326px){
    right:${props => (props.pathlocation === 'language' ? '13% !important' : '')};
}
@media(min-width:1440px){
    right:${props => (props.pathlocation === 'language' ? '14% !important' : '')};
}

`


export const Mydiv = mydiv;
export const Myimg = myimg;
export const Mycontent = mycontent;
export const Mysection = mysection;
export const Mycontainer = mycontainer;
export const Mytestscontainer = mytestcontainer;
export const Mytext = myTextYourLevelText;
export const MyTitleContainer = mytitlecontainer;
export const MyArrowContainer = myarrowcontainer;


