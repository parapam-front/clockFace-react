const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const filename = type => isProd ? `bundle.[hash].${type}` : `bundle.${type}`

const CSSLoaders = loader => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
        },
            'css-loader'
    ]

    if (loader) {
        loaders.push(loader)
    }

    return loaders
}

const babelOpt = preset => {
    const opts = {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties']
    }
    if (preset) {
        opts.presets.push(preset)
    }

    return opts
}

const jsLoader = preset => {
    const loaders = [
        {
            loader: 'babel-loader',
            options: babelOpt(preset)
        }
    ]

    // if (isDev) {
    //     loaders.push('eslint-loader')
    // }

    return loaders
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: [
            '@babel/polyfill',
            './index.jsx'
    ],
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.css', '.scss', '.jsx']
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
        port: 3000,
        hot: isDev
    },
    plugins: [
            new CleanWebpackPlugin(),
            new HTMLWebpackPlugin({
                template: 'index.html'
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src/favicon.ico'),
                        to: path.resolve(__dirname, 'dist')
                    },
                    // {
                    //     from: path.resolve(__dirname, 'src/assets/img'),
                    //     to: path.resolve(__dirname, 'dist/assets/img')
                    // },
                    // {
                    //     from: path.resolve(__dirname, 'src/assets/fonts'),
                    //     to: path.resolve(__dirname, 'dist/assets/fonts')
                    // }
                ]
            }),
            new MiniCssExtractPlugin({
                filename: filename('css')
            })

    ],
    module: {
        rules: [
            {
                test: /\.scss|css$/,
                use: CSSLoaders('sass-loader')
            },
            {
                test: /\.js$/,
                use: jsLoader()
            },
            {
                test: /\.jsx$/,
                use: jsLoader('@babel/preset-react')
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
}