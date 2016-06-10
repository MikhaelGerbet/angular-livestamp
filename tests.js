/**
 * License: MIT.
 * Copyright (C) 2016, Mikhael GERBET frollon.noir@gmail.com.
 */

'use strict';

beforeEach(module('angularLivestamp'));


describe('test livestamp', function () {
    beforeEach(module(function () {

    }));
    it('is initialised', inject(function ($rootScope, $compile) {

        var date;
        date = new Date();
        date = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ' +
            ('00' + date.getHours()).slice(-2) + ':' +
            ('00' + date.getUTCMinutes()).slice(-2) + ':' +
            ('00' + date.getUTCSeconds()).slice(-2);



        var element = angular.element('<div mg-livestamp="'+date+'"></div>');
        element = $compile(element)($rootScope);
        $rootScope.$digest();
        expect(element.text()).toBe('a few seconds ago');

    }));
});
