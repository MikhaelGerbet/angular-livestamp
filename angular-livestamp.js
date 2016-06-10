/**
 * angular-spinner version 0.8.1
 * License: MIT.
 * Copyright (C) 2016, Mikhael GERBET frollon.noir@gmail.com.
 */

'format amd';

(function (root) {
    'use strict';

    function factory(angular,$,moment) {

        return angular
            .module('angularLivestamp', [])

            .directive('mgLivestamp', [function () {
                return {
                    restrict: 'AE',
                    replace: true,
                    scope: {
                        mgLivestamp : '@'
                    },
                    link: function (scope, element) {
                        scope.$watch('mgLivestamp',function(){
                            scope.refresh();
                        });

                        scope.refresh = function(){
                            $(element).livestamp(moment(scope.mgLivestamp));
                        };
                        scope.refresh();
                    }
                };
            }]);
    }

    if ((typeof module === 'object') && module.exports) {
        /* CommonJS module */
        module.exports = factory(require('angular'),require('jquery'),require('moment'));
    } else if (typeof define === 'function' && define.amd) {
        /* AMD module */
        define(['angular','jquery', 'moment'], factory);
    } else {
        /* Browser global */
        factory(root.angular,root.jQuery,root.moment);
    }
}(this));
