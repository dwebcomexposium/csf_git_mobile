!function(d,e,i){var u=d(e);d(i).ready(function(){var i=d("body"),n="show-nav-main",e="show-fixed-header",t={Mobile:!1,Desktop:!1,Tablet:!1},a={Scroll:0,WinWidth:0};function s(){setTimeout(function(){d(".carrousel-home .caroufredsel_wrapper").height(d(".carrousel-home .slider-content").outerHeight()),d(".block-tiles .tiles-item, .block-tiles .tiles, .block-tiles .caroufredsel_wrapper").height(d(".block-tiles .tiles .tiles__image").outerHeight())},50)}function l(e){var i=e.clone();e.after(i),e.remove(),i.attr("style","").find(".slider-content").attr("style","")}function o(e,i){(e.find(".slider-content").length?e.find(".slider-content"):e.find(".slider__slides")).carouFredSel(i)}function r(){i.removeClass("show-newsletter"),d(".newsletter-form").fadeOut(400)}function c(){a.WinWidth=u.width(),t.Desktop=1024<a.WinWidth,t.Mobile=a.WinWidth<=767,t.Tablet=a.WinWidth<=1024&&768<=a.WinWidth}d(".newsletter-form .nf-main-content").prepend('<a href="#" class="newsletter-close"></a>'),d(".site-banner .main-navigation, .site-banner .block-social, .site-banner .lang-switcher").wrapAll('<div class="nav-wrapper"><div class="nav-inner"></div></div>'),d(".site-banner .nav-inner").append(d(".site-banner > .inside > .header-topquicklinks").clone()),d(".site-banner .sb-menu-trigger, .site-banner #cxpmClientAccountWidget, .site-banner .global-search-form").wrapAll('<div class="nav-bar"></div>'),d(".site-banner .nav-bar").prepend(d(".site-banner > .inside > .header-topquicklinks").clone()),d(".block-tiles").append('<div class="slider-pagin">'),d(".exposer .carrousel-anim-home .la-slider").append('<div class="slider-pagin">'),d(".article-title .inside").append(d(".article-title .at-illust").wrap('<div class="article-image-wrapper">').parent().detach()),d(".article-title .article-image-wrapper").append(d(".article-title .at-theme").detach()),c(),i.on("click touchstart",function(e){var i=d(e.target);i.parents(".gsf-fields").length||i.closest(".global-search-form.is-visible").removeClass("is-visible")}),d(".sb-menu-trigger").click(function(e){e.preventDefault(),i.toggleClass(n),d(".site-banner .main-navigation").stop().slideDown()}),d(".mn-item-has-submenu").click(function(){d(this).find(".mn-menu-submenu").stop().slideToggle().parent().siblings().find(".mn-menu-submenu").slideUp()}),d('[href="#newsletter"]').click(function(e){d(".newsletter-form").length&&(e.preventDefault(),i.addClass("show-newsletter"),d(".newsletter-form").fadeIn(400))}),d(".newsletter-form").click(function(e){d(e.target).parents(".newsletter-form").length||r()}),d(".newsletter-close").click(function(e){e.preventDefault(),r()}),d(".jsTabs .tabs__nav a").click(function(e){var i=d(this),n=i.parent().index(),t=i.closest(".jsTabs");e.preventDefault(),i.parent().add(t.find(".tab:nth-child("+(n+1)+")")).addClass("active").siblings().removeClass("active")}),u.on("load",function(){d("body").addClass("loaded"),s()}),u.on("scroll",function(){a.Scroll=u.scrollTop(),i.toggleClass(e,52<a.Scroll),s()}),u.on("resize orientationchange",function(){c(),s()}),d(".carrousel-home .slider").length&&(l(d(".carrousel-home .la-slider")),u.on("load",function(){o(d(".carrousel-home .la-slider"),{width:"100%",items:1,responsive:!0,scroll:{fx:"fade",duration:400,onBefore:function(){d(this).find(".la-item").removeClass("active")},onAfter:function(){d(this).find(".la-item:first-child").addClass("active")}},swipe:{onTouch:!0,onMouse:!1},auto:{play:!1,timeoutDuration:7e3},pagination:{container:".carrousel-home .slider-pagin"},onCreate:function(){d(this).find(".la-item:first-child").addClass("active"),d(".carrousel-home .la-item-img").each(function(){d(this).wrap('<div class="slider-image">')})},infinite:!0})})),d(".tiles").length&&u.on("load",function(){d(".tiles").carouFredSel({width:"100%",items:1,responsive:!0,swipe:{onTouch:!0,onMouse:!1},auto:{play:!0,timeoutDuration:5e3},swipe:{onTouch:!0,onMouse:!1},pagination:{container:".block-tiles .slider-pagin"},infinite:!0})}),d(".carrousel-anim-home .slider").length&&(l(d(".carrousel-anim-home .slider")),u.on("load",function(){o(d(".carrousel-anim-home .slider"),{width:"100%",items:1,responsive:!0,scroll:{fx:"fade",duration:400,onBefore:function(){d(this).find(".la-item.active").removeClass("active")},onAfter:function(){d(this).find(".la-item:first-child").addClass("active")}},swipe:{onTouch:!0,onMouse:!1},auto:{play:!1,timeoutDuration:5e3},prev:".carrousel-anim-home .slider-arrow--prev",next:".carrousel-anim-home .slider-arrow--next",pagination:{container:".carrousel-anim-home .slider-pagin"},onCreate:function(){d(this).find(".la-item:first-child").addClass("active")},infinite:!0})}))})}(jQuery,window,document);
