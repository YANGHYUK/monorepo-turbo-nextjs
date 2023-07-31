import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import React, { CSSProperties } from "react";

const BasicRoundButtonContainer = styled.div<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
`;
const Button = styled.button<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? colors.veryPery : colors.textBlueGray};
  min-width: 16rem;
  padding: 0 1rem;
  width: 100%;
  min-height: 4.2rem;
  height: 100%;
  border: solid 1px ${colors.lightGray2};
  border-radius: 0.8rem;
  word-break: keep-all;
  color: ${colors.white};
  font-size: 1.6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &.white {
    background-color: #fff;
    color: #000;
  }
  &:active {
    opacity: 0.8;
  }
  &:disabled {
    background-color: ${colors.darkGray};
    color: ${colors.fadeGray2};
    cursor: not-allowed;
  }
`;

interface IbasicRoundButton {
  type?: string;
  disabled?: boolean;
  active?: boolean;
  buttonStyle?: CSSProperties;
  containerStyle?: CSSProperties;
  value?: any;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  dataSet?: any;
}
const BasicRoundButton = ({
  type,
  active = false,
  disabled,
  buttonStyle,
  containerStyle,
  value,
  dataSet,
  onClick,
}: IbasicRoundButton) => {
  return (
    <BasicRoundButtonContainer
      disabled={disabled}
      style={{ ...containerStyle }}
    >
      <Button
        active={active}
        className={type}
        disabled={disabled}
        style={{ ...buttonStyle }}
        onClick={onClick}
        data-set={dataSet}
      >
        {value}
      </Button>
    </BasicRoundButtonContainer>
  );
};

export default BasicRoundButton;
