$(() => {
    /*  */
    console.log('add chef page')

    const $addChefForm = $('.add-chef-form');
    const $nameInput = $('.name-input');
    const $priceInput = $('.price-input');
    const $cuisineInput = $('.cuisine-option');

    $addChefForm.on('submit', e => {
        e.preventDefault()

        let dataInput = {
            name: $nameInput.val(),
            price: Number( $priceInput.val() ),
            cuisine: $cuisineInput.val()
        };
        console.log(dataInput)

        $.ajax({
            type: 'POST',
            url: 'api/chef/create',
            data: dataInput
        })
            .then( dataOutput => {
                console.log(dataOutput)
            })
            .catch( err => {
                console.log(err)
            })
    })
    /*  */
})