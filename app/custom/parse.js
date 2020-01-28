captureData = (data) => {
    let dataArr = [];

    data.forEach( val => {
        dataArr.push(val.dataValues)
    })

    // console.table(dataArr)
    console.table(
        dataArr,
        [
            'id', 'name', 
            'price', 'Cuisines'
        ]
    )


    return dataArr;
};

// convertData = (data) => {
//     let dataArr = [];
    
//     data.forEach( val => {

//     })

//     return dataArr;
// };
/*  */



module.exports = {
    captureData
};