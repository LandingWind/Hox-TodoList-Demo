const proxy = { 
    'GET /test': { aaa: 'aaa' },
    'GET /remotelistdata': {data: [
        { id: 1, label: "from remote planet", isDone: false },
        { id: 2, label: "sing from moon", isDone: false },
    ]}
}

module.exports = proxy;