const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        './cv/js/app.js'
    ],
    output: {
        path: "/static/js",
        publicPath: "/static/",
        filename: "app.js"
    },
    watch: true,
    module: {
        loaders: [{
                test: /\.js$/,
                // excluding some local linked packages.
                // for normal use cases only node_modules is needed.
                exclude: /node_modules|vue\/src|vue-router\//,
                loader: 'babel'
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    resolveLoader: {
          modulesDirectories: [
              'node_modules'
          ]
    },

}
