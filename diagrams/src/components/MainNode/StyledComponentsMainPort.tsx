import styled from "@emotion/styled";
import React from "react";

export const ConnectionName = props => {
    const StyledConnectionName = styled.div`
    margin-top: 0px;
    margin-left: 5px;
    margin-right: 5px;
    text-align: ${props.aligment};
    width: 100%;
    height: 100%;
    font-size: 0.6em;
    color: white;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  `;
    return <StyledConnectionName>{props.children}</StyledConnectionName>;
};

export const Container = styled.div`
  margin-top: 2px;
  height: 15px;
  display: flex;
  /* border: 1px solid blue; */
`;
