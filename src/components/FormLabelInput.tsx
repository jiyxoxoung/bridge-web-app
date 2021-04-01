import { InputHTMLAttributes, LabelHTMLAttributes, ReactElement } from 'react'
import styled from 'styled-components'

import { COLOR } from 'consts'

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
`

const StyledInput = styled.input`
  flex: 1;
  padding: 12px 0;
  border: none;
  font-size: 14px;
  color: ${COLOR.text};
  border-bottom: 1px solid ${COLOR.darkGray2};
  background-color: transparent;
  :focus {
    outline: none;
  }

  :focus ~ label,
  :not(:placeholder-shown) ~ label {
    top: -15px;
    font-size: 12px;
  }
`

const StyledLable = styled.label`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.37px;
  color: #ffffff;
  opacity: 0.48;
  font-family: Gotham;
  font-size: 16px;
  position: absolute;
  pointer-events: none;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`

const FormLabelInput = ({
  inputProps,
  labelProps,
}: {
  inputProps: InputHTMLAttributes<HTMLInputElement>
  labelProps: LabelHTMLAttributes<HTMLLabelElement>
}): ReactElement => {
  return (
    <StyledContainer>
      <StyledInput
        {...inputProps}
        // Placeholder ' ' used to distinguish of label position
        placeholder=" "
        onWheel={({ currentTarget }): void => {
          currentTarget.blur()
        }}
      />
      <StyledLable {...labelProps} />
    </StyledContainer>
  )
}

export default FormLabelInput
