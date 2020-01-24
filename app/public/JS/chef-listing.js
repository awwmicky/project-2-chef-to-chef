$(() => {
    /*  */
    $.ajax({
        type: "get",
        url: "api/chef/all"
    }).then((data) => {
        console.log(data);
        renderAllChef(data)
    })
        .catch(err => {
            console.log(err)
        })

    renderAllChef = (data) => {
        $(".chef-listing").empty() //take out any extra stuff in the section 
        for (let i = 0; i < data.length; i++) {
            $(".chef-listing").append(
                `<div class="chef-list" data-id="${data[i].id}">
                    <span class="chef-name">
                        ${data[i].name}
                    </span>
                    <span class="chef-price">
                        ${data[i].price}
                    </span>
                    <span class="chef-cuisine">
                        ${data[i].cuisine}
                    </span>
                </div>`
            )
        }
    }
    /*  */
})