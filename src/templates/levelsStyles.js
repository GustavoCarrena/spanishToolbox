import styled from 'styled-components';

const mySection = styled.section `
margin-top:${props => (props.pathlocation === 'regular') ? '-45px !important' : 'none !important'};
height:${props => (props.pathlocation === 'regular') ? '600px !important' : 'none !important'};
justify-content:${props => (props.pathlocation === 'regular') ? 'flex-start !important' : 'none !important'};
@media(min-width:375px){
    margin-top:${props => (props.pathlocation === 'regular') ? '-47px !important' : 'none !important'};
    height:${props => (props.pathlocation === 'regular') ? '682px !important' : 'none !important'};
}
@media(min-width:400px){
    margin-top:${props => (props.pathlocation === 'regular') ? '-48px !important' : 'none !important'};
}
@media(min-width:429px){
    margin-top:${props => (props.pathlocation === 'regular') ? '-49px !important' : 'none !important'};
}
@media(min-width:469px){
    margin-top:${props => (props.pathlocation === 'regular') ? '-50px !important' : 'none !important'};
}
@media(min-width:500px){
    margin-top:${props => (props.pathlocation === 'regular') ? '-51px !important' : 'none !important'};
}
@media(min-width:540px){
    margin-top:${props => (props.pathlocation === 'regular') ? '-52px !important' : 'none !important'};
}
@media(min-width:585px){
    margin-top:${props => (props.pathlocation === 'regular') ? '-53px !important' : 'none !important'};
}
@media(min-width:600px){
    margin-top:${props => (props.pathlocation === 'regular') ? '-54px !important' : 'none !important'};
}
@media(min-width:640px){
    margin-top:${props => (props.pathlocation === 'regular') ? '-55px !important' : 'none !important'};
}
@media(min-width:680px){
    margin-top:${props => (props.pathlocation === 'regular') ? '-60px !important' : 'none !important'};
}
@media(min-width:790px){
    margin-top:${props => (props.pathlocation === 'regular') ? '-61px !important' : 'none !important'};

}
@media(min-width:860px){
    margin-top:${props => (props.pathlocation === 'regular') ? '-67px !important' : 'none !important'};
}

@media(min-width:992px){
    height:${props => (props.pathlocation === 'regular') ? '500px !important' : 'none !important'};
}
@media(min-width:1070px){
    margin-top:${props => (props.pathlocation === 'regular') ? '-74px !important' : 'none !important'};
}
@media(min-width:1275px){
    margin-top:${props => (props.pathlocation === 'regular') ? '-80px !important' : 'none !important'};
}
@media(min-width:1440px){
    margin-top:${props => (props.pathlocation === 'regular') ? '-85px !important' : 'none !important'};
}
`

const myOndaHeader = styled.div `
    display:${props => (props.pathlocation === 'regular') ? 'block !important' : 'none !important'};
`

const myTitleContainer = styled.div `
    padding-top:${props => (props.pathlocation === 'regular') ? '30px !important' : 'none !important'};
`

export const MySection = mySection;
export const MyOndaHeader = myOndaHeader;
export const MyTitleContainer = myTitleContainer;