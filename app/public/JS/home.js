$(() => {
    /*  */
    console.log('— home —')

    const $chefForm = $('.chef-data-form');
    const $cuisineInput = $('.cuisine-input');
    const $priceInput = $('.price-input');
    const $searchChefListing = $('.search-chef-listing');



    function randomCookies() {
        let cookieArr = [];
        
        let randNum = Math.ceil(Math.random() * 5);
        // console.log(randNum)

        for (let i = 0; i < randNum; i++) {
            let cookie = `<i class="fas fa-cookie-bite"></i>`;
            cookieArr.push(cookie)
        }

        // console.log(cookieArr)
        return cookieArr.join('');
    }



    renderChefData = (data) => {
        $searchChefListing.empty()

        // <p>Cuisine: ${chef.cuisine}</p>
        // <i class="fas fa-cookie-bite"></i>

        data.forEach( chef => {
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

                ${ 
                    (!chef.Cuisines.length) ?
                    `<p>Cuisine: ---</p>` :
                    cuisineData(chef.Cuisines) 
                }

            </div>
        </div>
        <div class="rating">
            ${ randomCookies() }
        </div>
        <div class="btn-container">
            <button class="request-btn">
                Request
            </button>
        </div>
    </div>
    `
            )
        })

        function cuisineData(chefData) {
            let cuisineArr = [];
            // console.log(chefData);
    
            chefData.forEach( cuisines => {
                cuisineArr.push(
                    `<p>Cuisine: ${ cuisines.type }</p>`
                )
            })
        
            return cuisineArr.join('');
        }
    };



    $chefForm.on('submit', (e) => {
        e.preventDefault()

        let cuisine = $cuisineInput.val();
        let price = Number( $priceInput.val() );
        console.log(`Front-End: ${cuisine} & ${price}`)

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

    function setupData () {
        console.log('test');

        function createCuisineData () {
            $.ajax({
                type: 'POST',
                url: 'api/cuisine/setup'
            })
            .then( chefData => {
                console.log(chefData)
                console.log('cuisine data')
            })
            .catch( err => {
                console.log(err)
            })
        }

        cuisineStatus = () => {
            $.ajax({
                type: 'GET',
                url: 'api/cuisine/all'
            })
            .then( cuisineData => {
                // console.log(cuisineData)
                
                if (cuisineData.length === 0) {
                    console.log(cuisineData)
                    createCuisineData()
                } else {
                    console.log(cuisineData)
                    console.log('cuisines are set')
                }
            })
            .catch( err => {
                console.log(err)
            })
        };

        function createChefData () {
            $.ajax({
                type: 'POST',
                url: 'api/chef/setup'
            })
            .then( chefData => {
                console.log(chefData)
                console.log('chef data')
                // additional




                
            })
            .catch( err => {
                console.log(err)
            })
        }

        chefStatus = () => {
            $.ajax({
                type: 'GET',
                url: 'api/chef/all'
            })
            .then( ChefData => {
                // console.log(ChefData)
                
                if (ChefData.length === 0) {
                    console.log(ChefData)
                    createChefData()
                } else {
                    console.log(ChefData)
                    console.log('chefs are set')
                }
            })
        };

        cuisineStatus()
        chefStatus()
    }

    setupData()
    /*  */
})