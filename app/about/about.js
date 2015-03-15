boomerang.controller('AboutController', function ($http, $sce, Config, NavService) {
    var vm = this;
    vm.loading = true;
    NavService.setNavTab(0);
    vm.cover = Config.cover;
    $http.jsonp('https://www.googleapis.com/plus/v1/people/' + Config.id +
            '?callback=JSON_CALLBACK&fields=aboutMe%2Ccover%2Cimage%2CplusOneCount&key=' + Config.google_api).
        success(function (data) {
            vm.desc = data.aboutMe;
            $sce.trustAsHtml(vm.desc);

            if (data.cover && data.cover.coverPhoto.url) {
                vm.cover.url = data.cover.coverPhoto.url;
            }
            vm.loading = false;
        })
        .error(function (response) {
            vm.desc = "Sorry, we failed to retrieve the About text from the Google+ API.";
            vm.loading = false;
            vm.status = 'ready';
        });
});