import styled from "styled-components";

export const Container = styled.div.attrs((props) => ({
  className: props?.className,
}))`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  user-select: none;
  background-color: ${(props) => props?.style?.backgroundColor || "#ccc"};
  color: ${(props) => props?.style?.color};
  height: ${(props) => props?.style?.height || "40px"};
  width: ${(props) => props?.style?.width || "40px"};

  &.circular {
    border-radius: 50%;
  }

  &.rounded {
    border-radius: 5px;
  }

  &.square {
    border-radius: 0px;
  }

  & img {
    width: inherit;
    height: inherit;
    object-fit: contain;
  }
`;