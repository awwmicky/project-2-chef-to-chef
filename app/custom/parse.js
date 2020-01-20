captureData = (data) => {
    let dataArr = [];

    data.forEach( val => {
        dataArr.push(val.dataValues)
    })

    // console.table(dataArr)
    console.table(
        dataArr,
        [
            'id', 'name', 'price', 'cuisine'
        ]    
    )

    
    return dataArr;
};


module.exports = {
    captureData
};