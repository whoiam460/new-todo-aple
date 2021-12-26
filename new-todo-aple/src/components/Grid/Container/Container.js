import ContainerStyled from "./Container.style"

const Container = (props) =>{
    const {children, variant} = props
    return(
    <ContainerStyled variant= {variant}>{children}</ContainerStyled>
        
    )
}
export default Container