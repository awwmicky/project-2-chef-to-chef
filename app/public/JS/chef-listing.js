$(() => {
    /*  */
    console.log('— chef listing —')

    const $allChefListing = $('.all-chef-listing');



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
    // randomCookies()

    renderAllChef = (data) => {
        $allChefListing.empty()

        data.forEach( chef => {
            $allChefListing.append(
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
                <p>Price: $${chef.price}/hr</p>

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
        });

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
    // renderAllChef();

    viewAllChefListing = () => {
        $.ajax({
            type: "GET",
            url: "api/chef/all"
        })
        .then( data => {
            console.log(data)
            renderAllChef(data)
        })
        .catch( err => {
            console.log(err)
        })
    };

    viewAllChefListing()
    /*  */
})