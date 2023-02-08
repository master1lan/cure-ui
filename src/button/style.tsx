import styled from "@emotion/styled";
import { ThemeToCss } from "./type";

export const ButtonWrapper = styled.button`
  font-size: 16px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border-color: #d9d9d9;
  border-style: solid;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.88);
  outline: none;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  :hover,
  :active {
    color: #0958d9;
    border-color: #0958d9;
  }
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  white-space: nowrap;
  cursor: pointer;

  ${(props) => ThemeToCss(props.theme)}
`;
//todo 进行自定义
