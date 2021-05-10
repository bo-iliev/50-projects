const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const search = form.elements.query.value

    //axios does this so that it's easier to search query string
    //    | | |
    //    V V V

    const config = {
        params: {
            q: search,
        }
    }

    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=`, config);
    console.log(res.data[0].show.image.medium);
    console.log(res)
    showImages(res.data);
    form.elements.query.value = '';
})

const showImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG')
            img.src = result.show.image.medium
            document.body.append(img)
        }
    }
}