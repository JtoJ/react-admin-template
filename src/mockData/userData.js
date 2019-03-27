const Mock = require('mockjs');

Mock.mock('/login',(reqData) => {
    if(reqData) {
        console.log('in mock')
        console.log(reqData)
    }
    return {
        code: 'ok',
        data: {
            userRoutes: []
        }
    }
})