const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [ new HtmlWebpackPlugin({ template: './src/index.html', }), ],
    devServer: {
        //contentBase: './dist',
        static: { directory: path.resolve(__dirname, 'dist'), },
         compress: true, 
         port: 8080,
         historyApiFallback: true,
         
    },
    optimization: {
        minimize: false,
      },
      devtool:'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            { 
            test: /\.(js|jsx)$/, 
            exclude: /node_modules/, 
            loader: "babel-loader" 
        },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}