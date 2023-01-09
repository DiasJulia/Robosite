import styled from "styled-components";

type CardProps = {
    backgroundImage: string
}

export const Card = styled.div<CardProps>`
    width: 300px;
    height: 300px;
    border-radius: 24px;
    background-image: url(${(props) => props.backgroundImage});
`;