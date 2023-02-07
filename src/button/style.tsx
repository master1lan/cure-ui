import styled from "@emotion/styled";
import { ButtonShapeToCss, CustomButtonProps } from "./type";

export const ButtonWrapper = styled.button`
  font-size: 16px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: ${(props) =>
    ButtonShapeToCss((props.theme as CustomButtonProps).shape!!)};
`;
//todo 进行自定义
