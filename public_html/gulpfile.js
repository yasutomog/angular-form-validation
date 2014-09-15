var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('serve', ['connect'], function() {
    gulp.watch([
            './index.html', './js/valid.js'
        ]).on('change', function(changedFile) {
        // 変更がかかったファイルをconnect.reload()でライブリロードする
        gulp.src(changedFile.path).pipe(connect.reload());
    });
});

gulp.task('connect', function() {
    connect.server({
        root: [__dirname + '/'],
        port: 9001,
        livereload: true
    });
});