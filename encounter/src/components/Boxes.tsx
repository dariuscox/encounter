import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import { paper, paper2 } from 'images';

const PoetryBox = styled(Box)`
    /* background-color: #e2d1d1; // #6772e5; */
    padding-left: 1%;
    padding-right: 1%;
    background: url(${paper2});
    background-position: left top;
    background-repeat: repeat;
    border-radius: 25px;
    border: 5px;
    border-color: green;
    color: black;
    /* text-align: justify; */
    /* &:hover {
        background-color: #9d74d3;
    } */
`;

const StanzaSpacing = styled(Box)`
    padding-top: 10px;
`;

export { PoetryBox, StanzaSpacing };
