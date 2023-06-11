function addBook() {
    let bookTable =  document.querySelector('table')
    let name = document.querySelector('form #name')
    let bookTitle = document.querySelector('form #bookTitle')
    let bookAuthor = document.querySelector('form #bookAuthor')
    let bookRecommend = document.querySelector('form #bookRecommend')
    let form = document.querySelector('form')
    let newBook = bookTable.innerHTML +=
        `
            <tr>
                <td>${name.value}</td>
                <td>${bookTitle.value}</td>
                <td>${bookAuthor.value}</td>
                <td>${bookRecommend.value}</td>
            </tr>
        `
    form.reset()
}
