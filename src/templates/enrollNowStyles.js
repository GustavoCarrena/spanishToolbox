import styled from 'styled-components';

const mySection = styled.section`
align-items:${props => (props.pathlocation === 'about' ? 'flex-start !important' : '')};
height:${props => (props.pathlocation === 'about' ? '170px !important' : '')};
`

export const MySection =  mySection;