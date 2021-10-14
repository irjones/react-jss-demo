const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const clientConfig = {
    target: 'web',
    entry: {
        client: './src/client/index.tsx'
    },
    output: {
        filename: '[name].[fullhash].js',
        path: path.resolve(__dirname, 'dist/client')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.[t|j]s(x?)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-typescript', '@babel/preset-react', '@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/client/index.html'
        }), 
        new CleanWebpackPlugin()
    ]
}

const serverConfig = {
    target: 'node',
    entry: {
        server: './src/server/index.ts'
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist/server')
    },
    resolve: {
        extensions: ['.js', '.ts', '.json']
    },
    module: {
        rules: [
            {
                test: /\.[t|j]s$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-typescript',
                            '@babel/preset-env'
                        ]
                    }
                }
            }
        ]
    },
    plugins: [new CleanWebpackPlugin()],
    devtool: 'source-map'
}
// TODO: figure out how to get a hot-reloading dev server working
// - Webpack Dev Server was not compiling dual configs correctly
module.exports = [ serverConfig, clientConfig ];