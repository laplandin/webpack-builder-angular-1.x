var path = require('path'); //Встроенный в ноду модуль для работы с файловыми путями
var webpack = require('webpack'); //Для доступа к встроенным плагинам webpack-а
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//Вызов сборки с переменной окруэения NODE_ENV=development webpack

const NODE_ENV = process.env.NODE_ENV || 'development'; //Переменная окружения ноды,  если не указана, то ставится равной development и запускает режим с автообновлением

const PATHS = {
    angular: path.join(__dirname, 'node_modules/angular/angular.min.js'),
    src: path.join(__dirname, './src'), //Абсолютный префикс для путей, указанных в entry
    dist: path.join(__dirname, './dist')
};

module.exports = {
  context: PATHS.src,
    // entry: path.resolve(__dirname),
  entry: {
    // vendor: ['angular'],
    index: "./index.js"
  },
  output: {
    path: PATHS.dist,
    filename: "scripts/[name].js",
    library: "[name]", //Импорт содержимого [name].js в глобальную переменную с одноименным именем
    // publicPath: "path/" //этот адрес будет использован в качестве префикса для обновленных  путей в сборке
  },
  watch: NODE_ENV == 'development', // Автоматическаая Пересборка при изменениях только в режиме разработки
  watchOptions: {
    agregateTimeout: 100 //Задержка между изменениями и пересборкой
  },
  devtool: NODE_ENV == 'development' ? "source-map" :  false, //Для прода не искпользуем соурс мэпы
   //http://webpack.github.io/docs/build-performance.html#sourcemaps - доступные значения
   // devtool: "eval-source-map" - для разработки
  module: {
    rules: [
      { //html
      test: /\.html$/,
      // use: ['file-loader?name=[name].[ext]', 'extract-loader', 'html-loader']
      use: ['html-loader']
    }, {
      test: /\.js$/,
      use: {loader: 'babel-loader?presets[]=es2015'},
      exclude: /node_modules/
    }, { //less to css
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'autoprefixer-loader', 'less-loader'],
        publicPath: './css/'
      })
    }, { //Изображения
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      use: {loader: 'file-loader?name=img/[name].[ext]'}
    },
    { //Шрифты
     test: /\.(woff2|woff|ttf|eot)$/,
     use: {loader: 'file-loader?name=fonts/[name].[ext]'}
   }
]
  },
  plugins:  [
    new webpack.NoEmitOnErrorsPlugin(), //Не дает произвести сборку с ошибками
    //  new webpack.optimize.CommonsChunkPlugin({ //Вынесение повторяющихся частей кода в отдельный файл
    //  name:  'common' //с таким именем, будет загружен и закэширован единожды
    //  minChunks: 2 //Указание из скольки минимум файлов нужно выносить повторяющийся код, для vendor Infinity
      // chunks: ['index', 'vendor'] //Определение конкретных файлов из которых можно выносить общую часть
      //посмотреть распределение модулей по файлам можно командой webpack --display-modules -v
  //  }),
    new ExtractTextPlugin({ //Извлечение текста из не JS файлов
      filename: 'styles/index.css',
      publicPath: './dist/styles/'
    }),
    new HtmlWebpackPlugin({ //Автоматическая генерация index.html с его зависимостями
      template: 'index.html'
    })
  ],
  // Настройки Live-сервера
  devServer: { //Некоторые параметры запускаются ТОЛЬКО инлайн через ключи
          contentBase: PATHS.dist,
          historyApiFallback: true,
          inline: true,
          port: 8080,
          stats: {
            errors: true,
            cached: false
          },
          watchContentBase: true
      }
};

//Если собираем на продакт, то добавляем плагин минификации
if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}
