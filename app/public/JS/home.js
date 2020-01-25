$(() => {
    /*  */
    console.log('— home —')

    const $chefForm = $('.chef-data-form');
    const $cuisineInput = $('.cuisine-input');
    const $priceInput = $('.price-input');
    const $results = $('.results');



    renderChefData = (data) => {
        $results.empty()

        data.forEach(info => {
            $results.append(

                `<div id="showChef" data-id="${info.id}">
                    <h3 id="chefName">Chef ${info.name}</h3>
                    <p id="chefPrice">price: ${info.price}/hr</p>
                    <p id="chefCuisine">cuisine: ${info.cuisine}</p>
                </div>`
            )
        })
    };



    $chefForm.on('submit', (e) => {
        e.preventDefault()

        let cuisine = $cuisineInput.val();
        let price = $priceInput.val();
        console.log(
            `Front-End: ${cuisine} & ${price}`
        )

        let query = `?cuisine=${cuisine}&price=${price}`;

        $.ajax({
            type: 'GET',
            url: `api/chef/search${query}`,
        })
        .then(chefData => {
            console.log(chefData)
            renderChefData(chefData)
        })
        .catch(err => {
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