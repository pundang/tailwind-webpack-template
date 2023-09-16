const path = require("node:path")

module.exports = {
    entry: "/src/index.ts",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, "src"),
                use: ["style-loader", "css-loader", "postcss-loader"]
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        compress: true,
        port: 8080
    }
}