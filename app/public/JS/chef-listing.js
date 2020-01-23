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
                `<div data-id="${data[i].id}">
        <p>
            ${data[i].name}
        </p>
        <span>
            ${data[i].price}
        </span>
        <span>
            ${data[i].cuisine}
        </span>
    </div>`
            )
        }
    }
    /*  */
})