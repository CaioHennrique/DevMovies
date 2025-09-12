import api from "./api"

async function ObterFilme() {

    const { data: { results } } = await api.get("/movie/popular")

    return results

}

async function ObterTopFilmes() {

    const { data: { results } } = await api.get("/movie/top_rated")

    return results
}

async function ObterTopSeries() {

    const { data: { results } } = await api.get("/tv/top_rated")

    return results

}

async function ObterPopularSeries() {

    const { data: { results } } = await api.get("/tv/popular")

    return results

}

async function ObterPopularArtistas() {

    const { data: { results } } = await api.get("/person/popular")

    return results

}


async function ObterTrailer(filmeId) {

    const { data: { results } } = await api.get(`/movie/${filmeId}/videos`)

    return results

}
async function ObterTrailerSerie(SerieId) {

    const { data: { results } } = await api.get(`/tv/${SerieId}/videos`)

    return results

}



// API PARA A PAGINACAO DO DETALHE

async function ObterCreditos(filmeId) {

    const { data: { cast } } = await api.get(`/movie/${filmeId}/credits`)

    return cast

}

async function ObterSimilares(filmeId) {

    const { data: { results } } = await api.get(`/movie/${filmeId}/similar`)

    return results

}

async function ObterDetalhe(filmeId) {

    const { data } = await api.get(`/movie/${filmeId}`)

    return data

}

export {ObterTrailerSerie, ObterCreditos, ObterSimilares, ObterDetalhe, ObterTrailer, ObterPopularArtistas, ObterPopularSeries, ObterTopSeries, ObterTopFilmes, ObterFilme }
