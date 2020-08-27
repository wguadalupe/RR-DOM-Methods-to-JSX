let koalaContainer = document.createElement('div')

koalaContainer.setAttribute('class', 'ui items')

// Koala Card
// koalas are in './public/koalas.js'
koalas.forEach(koala => {
    let koalaCard = document.createElement('div')
    koalaCard.setAttribute('class', 'item')
    koalaCard.style.cursor = 'pointer';

    // Koala Card Image
    let imageContainer = document.createElement('div')
    let koalaImage = document.createElement('img')

    imageContainer.setAttribute('class', 'image')

    koalaImage.setAttribute('src', koala.imageURL)

    imageContainer.append(koalaImage)

    // Koala Card Content
    let koalaContent = document.createElement('div')
    koalaContent.setAttribute('class', 'content')

    let header = document.createElement('div')
    header.setAttribute('class', 'header')
    header.append(koala.name)

    let descriptionParagraph = document.createElement('p')
    descriptionParagraph.append(koala.description)

    let descriptionContainer = document.createElement('div')
    descriptionContainer.setAttribute('class', 'description')
    descriptionContainer.append(descriptionParagraph)

    koalaContent.append(
        header,
        descriptionContainer
    )

    koalaCard.append(
        imageContainer,
        koalaContent
    )

    koalaContainer.append(koalaCard)
})

document.body.append(koalaContainer)