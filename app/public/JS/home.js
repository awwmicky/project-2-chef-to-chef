$(() => {
    /*  */
    console.log('— home —')

    const $chefForm = $('.chef-data-form');
    const $cuisineInput = $('.cuisine-input');
    const $priceInput = $('.price-input');
    const $searchChefListing = $('.search-chef-listing');



    renderChefData = (data) => {
        console.log(data);

        $searchChefListing.empty()

        data.forEach(chef => {
            $searchChefListing.append(

                `
            <div class="chef-container" data-id="${chef.id}">
                <div class="chef-photo-name">
                    <div class="chef-image">
                        <i class="fas fa-user-circle"></i>
                    </div>
                </div>
                <div class="chef-info-request">
                    <div class="user-info">
                        <h3>Chef ${chef.name}</h3>
                        <p>Price: $${chef.price}/Hr</p>
                        <p>Cuisine: ${chef.cuisine}</p>
                    </div>
                </div>
                <div class="rating">
                    <i class="fas fa-cookie-bite"></i><i class="fas fa-cookie-bite"></i><i class="fas fa-cookie-bite"></i><i
                        class="fas fa-cookie-bite"></i><i class="fas fa-cookie-bite"></i>
                </div>
                <div class="btn-container">
                    <button class="request-btn" "mr-5">Request</button>
                </div>
            </div>
            `
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