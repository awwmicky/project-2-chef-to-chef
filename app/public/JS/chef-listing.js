$(() => {
    /*  */
    const $allChefListing = $('.all-chef-listing');

    renderAllChef = (data) => {
        $allChefListing.empty() //take out any extra stuff in the section 

        data.forEach(chef => {
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
        });
    }

    // renderAllChef();

    viewAllChefListing = () => {
        $.ajax({
            type: "GET",
            url: "api/chef/all"
        })
            .then((data) => {
                console.log(data);
                renderAllChef(data)
            })
            .catch(err => {
                console.log(err)
            })
    };

    viewAllChefListing()

    /*  */
})