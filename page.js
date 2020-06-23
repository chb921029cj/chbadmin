let modules = [{
    index: 0,
    title: '后台管理系统',
    entryPath: "admin"
}, {
    index: 1,
    title: 'h5页面',
    entryPath: "h5"
}]

let config = module => {
    return {
        entry: 'src/' + module.entryPath + '/main.js',
        filename: 'index.html',
        title: module.title
    }
}

let currModule = modules[0]
//此处修改维护功能模块
module.exports = {
    modulePath: currModule.entryPath,
    index: config(currModule)
}