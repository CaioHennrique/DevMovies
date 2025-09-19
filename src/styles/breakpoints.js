const tamanho = {
    pequeno: "600px",
    medio: "850px",
    grande: "1830px",
    controleModal: "1200px"
}

const Breakpoints = {

    pequeno: `(max-width: ${tamanho.pequeno})`,
    medio: `(max-width: ${tamanho.medio})`,
    grande: `(max-width: ${tamanho.grande})`,
    controleWidthModal: `(min-width: ${tamanho.controleModal})`

}

export default Breakpoints