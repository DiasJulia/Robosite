import styled from "styled-components";

type RowProps = {
    justifyContent?: string;
}

export const Container = styled.div`
    margin-top: 85px;
`;

export const SubContainer = styled.div`
    margin: 4em;
`

export const FirstSection = styled.section`
    text-align: center;
    box-shadow: 0px 159px 159px rgba(0, 0, 0, 0.09), 0px 40px 87px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    min-height: 230px;

    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 44px;
        color: #1A3C21
    }

    p{
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 33px;

        color: #606060;
        margin: 0 4em;
    }
`;

export const Row = styled.div<RowProps>`
    display:flex;
    flex-direction: row;
    justify-content: ${(props) => props.justifyContent || 'space-between'};
    width: 100%;
`;

export const Badge = styled.div`
    background: linear-gradient(281.32deg, rgba(48, 48, 48, 0.6) -9.93%, rgba(0, 0, 0, 0) 40.16%), #469C57;
    box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.09), 0px 3px 7px rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 27px;

    width: 175px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 14px 18px;

    margin: 0 90px;

    color: #FFFFFF;
`;

export const Details = styled.details`
    box-shadow: 0px 20px 40px -6px rgba(0, 0, 0, 0.2), 0px 7px 10px rgba(0, 0, 0, 0.1), 0px 20px 40px rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 24px 24px;

    summary{
        background: linear-gradient(283.39deg, rgba(48, 48, 48, 0.6) 9.51%, rgba(0, 0, 0, 0) 50%), #469C57;
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 33px;
        text-transform: capitalize;
        color: #FFFFFF;

        padding: 7px 14px;
        cursor: pointer;
    }
`

export const TableLine = styled.div`
    height: 48px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    font-size: 20px;
    line-height: 27px;

    color: #606060;

    p{
        width: 16.6%;
        text-align: center;
    }

    &:nth-of-type(1){
        font-style: normal;
        font-weight: 800;
        text-transform: capitalize;
    }

    &:nth-of-type(odd){
        background: #F4F4F4;
    }

    &:nth-of-type(even){
        background: #FFF;
    }

    &:last-child{
        border-radius: 0 0 24px 24px;
    }
`;