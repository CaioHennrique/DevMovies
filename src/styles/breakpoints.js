const tamanho = {
    pequeno: "600px",
    medio: "750px",
    grande: "1000px"
}

const Breakpoints = {

    pequeno: `(max-width: ${tamanho.pequeno})`,
    medio: `(max-width: ${tamanho.medio})`,
    grandew: `(max-width: ${tamanho.grande})`

}

export default Breakpoints