$(() => {
/*  */
console.log('— home —')

const $chefForm = $('.chef-data-form');
const $cuisineInput = $('.cuisine-input');
const $priceInput = $('.price-input');
const $results = $('.results');



renderChefData = (data) => {
    $results.empty()

    data.forEach( info => {
        $results.append(
            `<div data-id="${info.id}">
                <h3>Chef ${info.name}</h3>
                <p>price: ${info.price}/hr</p>
                <p>cuisine: ${info.cuisine}</p>
            </div>`
        )
    })
};



$chefForm.on('submit', (e) => {
    e.preventDefault()

    let cuisine = $cuisineInput.val();
    let price = $priceInput.val();
    console.log(cuisine, price)

    // let query = `?cuisine=${cuisine}&price=${price}`;

    $.ajax({
        type: 'GET',
        // url: `api/chef/search${query}`,
        url: `api/chef/search/${cuisine}/${price}`
    })
    .then( chefData => {
        console.log(chefData)
        renderChefData(chefData)
    })
    .catch( err => {
        console.log(err)
    })
})

// $chefForm.on('submit', (e) => {
//     e.preventDefault()

//     // selected 'mexican' & '$'
//     fakeData = [
//         { id: 1, name: 'Phil', cuisine: 'mexican', price: 20 },
//         { id: 2, name: 'Billy', cuisine: 'mexcan', price: 30 },
//         { id: 3, name: 'GOD', cuisine: 'mexican', price: 40 }
//     ];
//     console.log(fakeData);
//     renderChefData(fakeData)
// })
/*  */
})