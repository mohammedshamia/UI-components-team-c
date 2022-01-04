import styled from "styled-components";

export const IconButton= styled.button`
  width: 45px ;
  height: 45px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  border: 2px solid gray;
  background-color: white;
  transition: all 0.2s;

  &:hover{
    background-color:  rgba(232, 232, 232, 1);
    /* border: 2px solid black; */

  }
` 