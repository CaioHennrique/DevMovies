import { BtnRed, BtnWhite } from "./style"

function Button({ children, vermelho, ...rest }) {

  return (
    <>
      {vermelho ? (<BtnRed  {...rest}>{children}</BtnRed>) : (<BtnWhite {...rest}>{children}</BtnWhite>)}
    </>
  )
}

export default Button