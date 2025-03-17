let book = {
    id: Math.random(),
    title: title,
    author: author,
    year: year,
    price: price,
    isAvailable: isAvailable,
};
for (let i in library) {
    if (library[i].title === searchTitle) {
        finIndex = i;
    }
}
function searchIndex(key, value) {
    let findIndex = -1;
    for (let i in library) {
        if (value === library[i][key]) {
            findIndex = i;
            break;
        }
    }
    return findIndex;
}
