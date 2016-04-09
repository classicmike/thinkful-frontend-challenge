var dest = './build/';
var src = './src/';

module.exports = {
    destination: dest,
    indexFile: src + 'index.html',
    copy: {
        assetsToCopy: [
            src + "**/*",
            '!' + src + 'lib',
            '!' + src + 'lib/**/*',
            '!' + src + 'js',
            '!' + src + 'css',
            '!' + src + 'js/**/*',
            '!' + src + 'css/**/*',
        ]
    },
    clean: {
    },
    usemin: {

    },
    connect: {
      root: src
    },
    images: {
        config: {
            src: src + 'img/**/*',
                dest: dest + 'img/'
        }
    },
    build: {
        tasks: [
            'usemin',
            'images'
        ]
    }
};
