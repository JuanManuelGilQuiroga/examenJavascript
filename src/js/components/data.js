export const getMoviesById = async (id) => {
    let res = await fetch(`https://search.imdbot.workers.dev/?tt=${id}`);
    let data = await res.json();
    return data
}