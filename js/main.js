(function () {
    'use strict';

    let real;
    let vector;
    let currentTheme;
    // let description;

    $(document).ready(() => {
        real = $('#real');
        vector = $('#vector');
        currentTheme = '#60b389';

        overlay(real, vector);
        
        // hides the vector pic and shows the real pic
        vector.click(() => {
            vector.css('opacity', 0);
            real.css('opacity', 1);
            setTimeout(() => {
                vector.css('display', 'none');
                real.css('display', 'block');
            }, 500);
        });

        // hides the real pic and shows the vector pic
        real.click(() => {
            vector.css('display', 'block');
            setTimeout(() => vector.css('opacity', 1), 0);
        });

        // to handle theme color change
        let colors = {
            'black': '#555555',
            'red': '#de5460',
            'blue': '#4185f2',
            'green': '#60b389',
            'purple': '#8d64de',
            'orange': '#eb8e54',
            'yellow': '#f2c23f'
        }

        // handles changing theme when color is picked and removing it
        let buttons = $('#theme div');
        buttons.mousedown(function() {
            let buttonColor = $(this).css('background-color').substr(4).split(')')[0].split(',');
            let current = [hexToRgb(currentTheme).r, hexToRgb(currentTheme).g, hexToRgb(currentTheme).b];
    
            let same = true;
            for (let i = 0; i < 3; i++) {
                if (current[i] != buttonColor[i]) {
                    same = false;
                }
            }

            if (same) {
                $(this).css('transform', 'scale(1)');
                $('body').css('background', '#ffffff');
            } else {
                $(buttons).css('transform', '');
                $(this).css('transform', 'scale(.5)');

                let color = colors[$(this).attr('class')]
                currentTheme = color;
                $('.me#vector').css('background-color', color);
                $('h1').css('color', color);

                let rgb = hexToRgb(color);
                let lighter = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, .1)`;
                $('body').css('background-color', lighter);
            }
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('#theme').css('opacity', 0);
            };
            if ($(this).scrollTop() <= 300) {
                $('#theme').css('opacity', 1);
            };
        });

        let icons = $('#social img');
        icons.mouseover(function() {
            $(this).css('border', `10px solid ${currentTheme}`);
        });
        icons.mouseleave(function () {
            $(this).css('border', 'none');
        });

        // sometimes the profile pic and project titles get misaligned. Think it has
        // something to do with loading order inconsistency, but this should be a quick fix
        let alignmentCheck = setInterval(() => {
            centerDescriptions();
            overlay(real, vector);
        }, 100);

        // buttons.mouseleave(function() {
        //     $(this).css('border', '0px dashed white');
        // });

        centerDescriptions();
        entryAnimation();
        
        let e = $('.entry');
        e.css('height', e.width());
    });

    function hexToRgb(hex) {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    // function rgbToHex(r, g, b) {
    //     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    // }

    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    // positions @top on top of @bottom
    function overlay(bottom, top) {
        let l = bottom.offset().left;
        let t = bottom.offset().top;

        top.css({
            position: 'absolute',
            left: l,
            top: t
        });
    }

    
    function centerDescriptions() {
        let descriptions = $('.description');
        descriptions.each(function () {
            let prevH = this.previousElementSibling.offsetHeight;
            let thisH = this.offsetHeight;
            this.style.marginTop = `${(prevH - thisH) / 2}px`;
            // let prevH = $(this).prev().offset().top;
            // let thisH = $(this).offset().top;
            // $(this).css('margin-top', `${(prevH - thisH) / 2}px`);
        });


    }

    function entryAnimation() {
        $('.entry').hover(function () {
            let d = $(this).children('.description');
            d.children('p').css({
                opacity: 1,
                height: '100px'
            });
            d.children('div').css({
                opacity: 1,
                height: '100%'
            });
            centerDescriptions();
        });

        $('.design-entry').hover(function () {
            let d = $(this).children('.description');
            d.css('opacity', 1);
            centerDescriptions();
        });

        $('.entry').mouseleave(function () {
            let d = $(this).children('.description');
            d.children('p').css({
                opacity: 0,
                height: 0
            });
            d.children('div').css({
                opacity: 0,
                height: 0
            });
            centerDescriptions();
        });

        $('.design-entry').mouseleave(function () {
            let d = $(this).children('.description');
            d.css('opacity', 0);
            // d.css('border', '1px solid red');
            centerDescriptions();
        });
    }

    window.onresize = () => {
        overlay(real, vector);
        centerDescriptions();

        // for some reason, .entry's height is 4px more than its width
        let e = $('.entry');
        e.css('height', e.width());
    }
})();