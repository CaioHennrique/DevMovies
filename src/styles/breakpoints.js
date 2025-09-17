const tamanho = {
    pequeno: "450px",
    medio: "700px",
    grande: "1000px"
}

const Breakpoints = {

    pequeno: `(max-width: ${tamanho.pequeno})`,
    medio: `(max-width: ${tamanho.medio})`,
    grandew: `(max-width: ${tamanho.grande})`

}

export default Breakpoints