/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-firefox' : '&#xe001;',
			'icon-IE' : '&#xe06a;',
			'icon-opera' : '&#xe06b;',
			'icon-safari' : '&#xe06c;',
			'icon-IcoMoon' : '&#xe06d;',
			'icon-home' : '&#xe02a;',
			'icon-home-2' : '&#xe02b;',
			'icon-home-3' : '&#xe02c;',
			'icon-office' : '&#xe02d;',
			'icon-newspaper' : '&#xe02e;',
			'icon-pencil' : '&#xe02f;',
			'icon-pencil-2' : '&#xe030;',
			'icon-quill' : '&#xe031;',
			'icon-pen' : '&#xe032;',
			'icon-blog' : '&#xe033;',
			'icon-droplet' : '&#xe034;',
			'icon-paint-format' : '&#xe035;',
			'icon-image' : '&#xe036;',
			'icon-image-2' : '&#xe037;',
			'icon-images' : '&#xe038;',
			'icon-camera' : '&#xe039;',
			'icon-music' : '&#xe03a;',
			'icon-headphones' : '&#xe03b;',
			'icon-play' : '&#xe03c;',
			'icon-film' : '&#xe03d;',
			'icon-camera-2' : '&#xe03e;',
			'icon-dice' : '&#xe03f;',
			'icon-pacman' : '&#xe040;',
			'icon-spades' : '&#xe041;',
			'icon-clubs' : '&#xe042;',
			'icon-diamonds' : '&#xe043;',
			'icon-pawn' : '&#xe044;',
			'icon-bullhorn' : '&#xe045;',
			'icon-connection' : '&#xe046;',
			'icon-podcast' : '&#xe047;',
			'icon-feed' : '&#xe048;',
			'icon-book' : '&#xe049;',
			'icon-books' : '&#xe04a;',
			'icon-library' : '&#xe04b;',
			'icon-file' : '&#xe04c;',
			'icon-profile' : '&#xe04d;',
			'icon-file-2' : '&#xe04e;',
			'icon-file-3' : '&#xe04f;',
			'icon-file-4' : '&#xe050;',
			'icon-copy' : '&#xe051;',
			'icon-copy-2' : '&#xe052;',
			'icon-copy-3' : '&#xe053;',
			'icon-paste' : '&#xe054;',
			'icon-paste-2' : '&#xe055;',
			'icon-paste-3' : '&#xe056;',
			'icon-stack' : '&#xe057;',
			'icon-folder' : '&#xe058;',
			'icon-folder-open' : '&#xe059;',
			'icon-tag' : '&#xe05a;',
			'icon-tags' : '&#xe05b;',
			'icon-barcode' : '&#xe05c;',
			'icon-qrcode' : '&#xe05d;',
			'icon-ticket' : '&#xe05e;',
			'icon-cart' : '&#xe05f;',
			'icon-cart-2' : '&#xe060;',
			'icon-cart-3' : '&#xe061;',
			'icon-coin' : '&#xe062;',
			'icon-credit' : '&#xe063;',
			'icon-calculate' : '&#xe064;',
			'icon-support' : '&#xe065;',
			'icon-phone' : '&#xe066;',
			'icon-phone-hang-up' : '&#xe067;',
			'icon-address-book' : '&#xe068;',
			'icon-notebook' : '&#xe069;',
			'icon-envelop' : '&#xe06e;',
			'icon-pushpin' : '&#xe06f;',
			'icon-location' : '&#xe070;',
			'icon-location-2' : '&#xe071;',
			'icon-compass' : '&#xe072;',
			'icon-map' : '&#xe073;',
			'icon-map-2' : '&#xe074;',
			'icon-history' : '&#xe075;',
			'icon-clock' : '&#xe076;',
			'icon-clock-2' : '&#xe077;',
			'icon-alarm' : '&#xe078;',
			'icon-alarm-2' : '&#xe079;',
			'icon-bell' : '&#xe07a;',
			'icon-stopwatch' : '&#xe07b;',
			'icon-calendar' : '&#xe07c;',
			'icon-calendar-2' : '&#xe07d;',
			'icon-print' : '&#xe07e;',
			'icon-keyboard' : '&#xe07f;',
			'icon-screen' : '&#xe080;',
			'icon-laptop' : '&#xe081;',
			'icon-mobile' : '&#xe082;',
			'icon-mobile-2' : '&#xe083;',
			'icon-tablet' : '&#xe084;',
			'icon-tv' : '&#xe085;',
			'icon-cabinet' : '&#xe086;',
			'icon-drawer' : '&#xe087;',
			'icon-drawer-2' : '&#xe088;',
			'icon-drawer-3' : '&#xe089;',
			'icon-box-add' : '&#xe08a;',
			'icon-box-remove' : '&#xe08b;',
			'icon-download' : '&#xe08c;',
			'icon-upload' : '&#xe08d;',
			'icon-disk' : '&#xe08e;',
			'icon-storage' : '&#xe08f;',
			'icon-undo' : '&#xe090;',
			'icon-redo' : '&#xe091;',
			'icon-flip' : '&#xe092;',
			'icon-flip-2' : '&#xe093;',
			'icon-undo-2' : '&#xe095;',
			'icon-meter2' : '&#xe013;',
			'icon-redo-2' : '&#xe096;',
			'icon-meter' : '&#xe012;',
			'icon-forward' : '&#xe097;',
			'icon-cog' : '&#xe002;',
			'icon-hammer' : '&#xe003;',
			'icon-wand' : '&#xe004;',
			'icon-aid' : '&#xe005;',
			'icon-bug' : '&#xe006;',
			'icon-pie' : '&#xe007;',
			'icon-stats' : '&#xe008;',
			'icon-bars' : '&#xe009;',
			'icon-bars-2' : '&#xe00a;',
			'icon-gift' : '&#xe00b;',
			'icon-trophy' : '&#xe00c;',
			'icon-glass' : '&#xe00d;',
			'icon-mug' : '&#xe00e;',
			'icon-food' : '&#xe00f;',
			'icon-leaf' : '&#xe010;',
			'icon-rocket' : '&#xe011;',
			'icon-reply' : '&#xe094;',
			'icon-bubble' : '&#xe014;',
			'icon-bubbles' : '&#xe015;',
			'icon-bubbles-2' : '&#xe016;',
			'icon-bubble-2' : '&#xe017;',
			'icon-bubbles-3' : '&#xe018;',
			'icon-bubbles-4' : '&#xe019;',
			'icon-user' : '&#xe01a;',
			'icon-users' : '&#xe01b;',
			'icon-user-2' : '&#xe01c;',
			'icon-users-2' : '&#xe01d;',
			'icon-user-3' : '&#xe01e;',
			'icon-user-4' : '&#xe01f;',
			'icon-quotes-left' : '&#xe020;',
			'icon-busy' : '&#xe021;',
			'icon-spinner' : '&#xe022;',
			'icon-spinner-2' : '&#xe023;',
			'icon-spinner-3' : '&#xe024;',
			'icon-spinner-4' : '&#xe025;',
			'icon-spinner-5' : '&#xe026;',
			'icon-spinner-6' : '&#xe027;',
			'icon-binoculars' : '&#xe028;',
			'icon-search' : '&#xe029;',
			'icon-zoom-in' : '&#xe098;',
			'icon-zoom-out' : '&#xe099;',
			'icon-expand' : '&#xe09a;',
			'icon-contract' : '&#xe09b;',
			'icon-expand-2' : '&#xe09c;',
			'icon-contract-2' : '&#xe09d;',
			'icon-key' : '&#xe09e;',
			'icon-key-2' : '&#xe09f;',
			'icon-lock' : '&#xe0a0;',
			'icon-lock-2' : '&#xe0a1;',
			'icon-unlocked' : '&#xe0a2;',
			'icon-wrench' : '&#xe0a3;',
			'icon-settings' : '&#xe0a4;',
			'icon-equalizer' : '&#xe0a5;',
			'icon-cog-2' : '&#xe0a6;',
			'icon-cogs' : '&#xe0a7;',
			'icon-dashboard' : '&#xe0a8;',
			'icon-hammer-2' : '&#xe0a9;',
			'icon-fire' : '&#xe0aa;',
			'icon-lab' : '&#xe0ab;',
			'icon-magnet' : '&#xe0ac;',
			'icon-remove' : '&#xe0ad;',
			'icon-remove-2' : '&#xe0ae;',
			'icon-briefcase' : '&#xe0af;',
			'icon-airplane' : '&#xe0b0;',
			'icon-truck' : '&#xe0b1;',
			'icon-road' : '&#xe0b2;',
			'icon-accessibility' : '&#xe0b3;',
			'icon-target' : '&#xe0b4;',
			'icon-shield' : '&#xe0b5;',
			'icon-lightning' : '&#xe0b6;',
			'icon-switch' : '&#xe0b7;',
			'icon-power-cord' : '&#xe0b8;',
			'icon-signup' : '&#xe0b9;',
			'icon-list' : '&#xe0ba;',
			'icon-list-2' : '&#xe0bb;',
			'icon-numbered-list' : '&#xe0bc;',
			'icon-menu' : '&#xe0bd;',
			'icon-menu-2' : '&#xe0be;',
			'icon-tree' : '&#xe0bf;',
			'icon-cloud' : '&#xe0c0;',
			'icon-cloud-download' : '&#xe0c1;',
			'icon-cloud-upload' : '&#xe0c2;',
			'icon-download-2' : '&#xe0c3;',
			'icon-upload-2' : '&#xe0c4;',
			'icon-download-3' : '&#xe0c5;',
			'icon-upload-3' : '&#xe0c6;',
			'icon-globe' : '&#xe0c7;',
			'icon-earth' : '&#xe0c8;',
			'icon-link' : '&#xe0c9;',
			'icon-flag' : '&#xe0ca;',
			'icon-attachment' : '&#xe0cb;',
			'icon-eye' : '&#xe0cc;',
			'icon-eye-blocked' : '&#xe0cd;',
			'icon-eye-2' : '&#xe0ce;',
			'icon-bookmark' : '&#xe0cf;',
			'icon-bookmarks' : '&#xe0d0;',
			'icon-brightness-medium' : '&#xe0d1;',
			'icon-brightness-contrast' : '&#xe0d2;',
			'icon-contrast' : '&#xe0d3;',
			'icon-star' : '&#xe0d4;',
			'icon-star-2' : '&#xe0d5;',
			'icon-star-3' : '&#xe0d6;',
			'icon-heart' : '&#xe0d7;',
			'icon-heart-2' : '&#xe0d8;',
			'icon-heart-broken' : '&#xe0d9;',
			'icon-thumbs-up' : '&#xe0da;',
			'icon-thumbs-up-2' : '&#xe0db;',
			'icon-happy' : '&#xe0dc;',
			'icon-happy-2' : '&#xe0dd;',
			'icon-smiley' : '&#xe0de;',
			'icon-smiley-2' : '&#xe0df;',
			'icon-tongue' : '&#xe0e0;',
			'icon-tongue-2' : '&#xe0e1;',
			'icon-sad' : '&#xe0e2;',
			'icon-sad-2' : '&#xe0e3;',
			'icon-wink' : '&#xe0e4;',
			'icon-wink-2' : '&#xe0e5;',
			'icon-grin' : '&#xe0e6;',
			'icon-grin-2' : '&#xe0e7;',
			'icon-cool' : '&#xe0e8;',
			'icon-cool-2' : '&#xe0e9;',
			'icon-angry' : '&#xe0ea;',
			'icon-angry-2' : '&#xe0eb;',
			'icon-evil' : '&#xe0ec;',
			'icon-evil-2' : '&#xe0ed;',
			'icon-shocked' : '&#xe0ee;',
			'icon-shocked-2' : '&#xe0ef;',
			'icon-confused' : '&#xe0f0;',
			'icon-confused-2' : '&#xe0f1;',
			'icon-neutral' : '&#xe0f2;',
			'icon-neutral-2' : '&#xe0f3;',
			'icon-wondering' : '&#xe0f4;',
			'icon-wondering-2' : '&#xe0f5;',
			'icon-point-up' : '&#xe0f6;',
			'icon-point-right' : '&#xe0f7;',
			'icon-point-down' : '&#xe0f8;',
			'icon-point-left' : '&#xe0f9;',
			'icon-warning' : '&#xe0fa;',
			'icon-notification' : '&#xe0fb;',
			'icon-question' : '&#xe0fc;',
			'icon-info' : '&#xe0fd;',
			'icon-info-2' : '&#xe0fe;',
			'icon-blocked' : '&#xe0ff;',
			'icon-cancel-circle' : '&#xe100;',
			'icon-checkmark-circle' : '&#xe101;',
			'icon-spam' : '&#xe102;',
			'icon-close' : '&#xe103;',
			'icon-checkmark' : '&#xe104;',
			'icon-checkmark-2' : '&#xe105;',
			'icon-spell-check' : '&#xe106;',
			'icon-minus' : '&#xe107;',
			'icon-plus' : '&#xe108;',
			'icon-enter' : '&#xe109;',
			'icon-exit' : '&#xe10a;',
			'icon-play-2' : '&#xe10b;',
			'icon-pause' : '&#xe10c;',
			'icon-stop' : '&#xe10d;',
			'icon-backward' : '&#xe10e;',
			'icon-forward-2' : '&#xe10f;',
			'icon-play-3' : '&#xe110;',
			'icon-pause-2' : '&#xe111;',
			'icon-stop-2' : '&#xe112;',
			'icon-backward-2' : '&#xe113;',
			'icon-forward-3' : '&#xe114;',
			'icon-first' : '&#xe115;',
			'icon-last' : '&#xe116;',
			'icon-previous' : '&#xe117;',
			'icon-next' : '&#xe118;',
			'icon-eject' : '&#xe119;',
			'icon-volume-high' : '&#xe11a;',
			'icon-volume-medium' : '&#xe11b;',
			'icon-volume-low' : '&#xe11c;',
			'icon-volume-mute' : '&#xe11d;',
			'icon-volume-mute-2' : '&#xe11e;',
			'icon-volume-increase' : '&#xe11f;',
			'icon-volume-decrease' : '&#xe120;',
			'icon-loop' : '&#xe121;',
			'icon-loop-2' : '&#xe122;',
			'icon-loop-3' : '&#xe123;',
			'icon-shuffle' : '&#xe124;',
			'icon-arrow-up-left' : '&#xe125;',
			'icon-arrow-up' : '&#xe126;',
			'icon-arrow-up-right' : '&#xe127;',
			'icon-arrow-right' : '&#xe128;',
			'icon-arrow-down-right' : '&#xe129;',
			'icon-arrow-down' : '&#xe12a;',
			'icon-arrow-down-left' : '&#xe12b;',
			'icon-arrow-left' : '&#xe12c;',
			'icon-arrow-up-left-2' : '&#xe12d;',
			'icon-arrow-up-2' : '&#xe12e;',
			'icon-arrow-up-right-2' : '&#xe12f;',
			'icon-arrow-right-2' : '&#xe130;',
			'icon-arrow-down-right-2' : '&#xe131;',
			'icon-arrow-down-2' : '&#xe132;',
			'icon-arrow-down-left-2' : '&#xe133;',
			'icon-arrow-left-2' : '&#xe134;',
			'icon-arrow-up-left-3' : '&#xe135;',
			'icon-arrow-up-3' : '&#xe136;',
			'icon-arrow-up-right-3' : '&#xe137;',
			'icon-arrow-right-3' : '&#xe138;',
			'icon-arrow-down-right-3' : '&#xe139;',
			'icon-arrow-down-3' : '&#xe13a;',
			'icon-arrow-down-left-3' : '&#xe13b;',
			'icon-arrow-left-3' : '&#xe13c;',
			'icon-tab' : '&#xe13d;',
			'icon-checkbox-checked' : '&#xe13e;',
			'icon-checkbox-unchecked' : '&#xe13f;',
			'icon-checkbox-partial' : '&#xe140;',
			'icon-radio-checked' : '&#xe141;',
			'icon-radio-unchecked' : '&#xe142;',
			'icon-crop' : '&#xe143;',
			'icon-scissors' : '&#xe144;',
			'icon-filter' : '&#xe145;',
			'icon-filter-2' : '&#xe146;',
			'icon-font' : '&#xe147;',
			'icon-text-height' : '&#xe148;',
			'icon-text-width' : '&#xe149;',
			'icon-bold' : '&#xe14a;',
			'icon-underline' : '&#xe14b;',
			'icon-italic' : '&#xe14c;',
			'icon-strikethrough' : '&#xe14d;',
			'icon-omega' : '&#xe14e;',
			'icon-sigma' : '&#xe14f;',
			'icon-table' : '&#xe150;',
			'icon-table-2' : '&#xe151;',
			'icon-insert-template' : '&#xe152;',
			'icon-pilcrow' : '&#xe153;',
			'icon-left-to-right' : '&#xe154;',
			'icon-right-to-left' : '&#xe155;',
			'icon-paragraph-left' : '&#xe156;',
			'icon-paragraph-center' : '&#xe157;',
			'icon-paragraph-right' : '&#xe158;',
			'icon-paragraph-justify' : '&#xe159;',
			'icon-paragraph-left-2' : '&#xe15a;',
			'icon-paragraph-center-2' : '&#xe15b;',
			'icon-paragraph-right-2' : '&#xe15c;',
			'icon-paragraph-justify-2' : '&#xe15d;',
			'icon-indent-increase' : '&#xe15e;',
			'icon-indent-decrease' : '&#xe15f;',
			'icon-new-tab' : '&#xe160;',
			'icon-embed' : '&#xe161;',
			'icon-code' : '&#xe162;',
			'icon-console' : '&#xe163;',
			'icon-share' : '&#xe164;',
			'icon-mail' : '&#xe165;',
			'icon-mail-2' : '&#xe166;',
			'icon-mail-3' : '&#xe167;',
			'icon-mail-4' : '&#xe168;',
			'icon-google' : '&#xe169;',
			'icon-google-plus' : '&#xe16a;',
			'icon-google-plus-2' : '&#xe16b;',
			'icon-google-plus-3' : '&#xe16c;',
			'icon-google-plus-4' : '&#xe16d;',
			'icon-google-drive' : '&#xe16e;',
			'icon-facebook' : '&#xe16f;',
			'icon-facebook-2' : '&#xe170;',
			'icon-facebook-3' : '&#xe171;',
			'icon-instagram' : '&#xe172;',
			'icon-twitter' : '&#xe173;',
			'icon-twitter-2' : '&#xe174;',
			'icon-twitter-3' : '&#xe175;',
			'icon-feed-2' : '&#xe176;',
			'icon-feed-3' : '&#xe177;',
			'icon-feed-4' : '&#xe178;',
			'icon-youtube' : '&#xe179;',
			'icon-youtube-2' : '&#xe17a;',
			'icon-vimeo' : '&#xe17b;',
			'icon-vimeo2' : '&#xe17c;',
			'icon-vimeo-2' : '&#xe17d;',
			'icon-lanyrd' : '&#xe17e;',
			'icon-flickr' : '&#xe17f;',
			'icon-flickr-2' : '&#xe180;',
			'icon-flickr-3' : '&#xe181;',
			'icon-flickr-4' : '&#xe182;',
			'icon-picassa' : '&#xe183;',
			'icon-picassa-2' : '&#xe184;',
			'icon-dribbble' : '&#xe185;',
			'icon-dribbble-2' : '&#xe186;',
			'icon-dribbble-3' : '&#xe187;',
			'icon-forrst' : '&#xe188;',
			'icon-forrst-2' : '&#xe189;',
			'icon-deviantart' : '&#xe18a;',
			'icon-deviantart-2' : '&#xe18b;',
			'icon-steam' : '&#xe18c;',
			'icon-steam-2' : '&#xe18d;',
			'icon-github' : '&#xe18e;',
			'icon-github-2' : '&#xe18f;',
			'icon-github-3' : '&#xe190;',
			'icon-github-4' : '&#xe191;',
			'icon-github-5' : '&#xe192;',
			'icon-wordpress' : '&#xe193;',
			'icon-wordpress-2' : '&#xe194;',
			'icon-joomla' : '&#xe195;',
			'icon-blogger' : '&#xe196;',
			'icon-blogger-2' : '&#xe000;',
			'icon-tumblr' : '&#xe197;',
			'icon-tumblr-2' : '&#xe198;',
			'icon-yahoo' : '&#xe199;',
			'icon-tux' : '&#xe19a;',
			'icon-apple' : '&#xe19b;',
			'icon-finder' : '&#xe19c;',
			'icon-android' : '&#xe19d;',
			'icon-windows' : '&#xe19e;',
			'icon-windows8' : '&#xe19f;',
			'icon-soundcloud' : '&#xe1a0;',
			'icon-soundcloud-2' : '&#xe1a1;',
			'icon-skype' : '&#xe1a2;',
			'icon-reddit' : '&#xe1a3;',
			'icon-linkedin' : '&#xe1a4;',
			'icon-lastfm' : '&#xe1a5;',
			'icon-lastfm-2' : '&#xe1a6;',
			'icon-delicious' : '&#xe1a7;',
			'icon-stumbleupon' : '&#xe1a8;',
			'icon-stumbleupon-2' : '&#xe1a9;',
			'icon-stackoverflow' : '&#xe1aa;',
			'icon-pinterest' : '&#xe1ab;',
			'icon-pinterest-2' : '&#xe1ac;',
			'icon-xing' : '&#xe1ad;',
			'icon-xing-2' : '&#xe1ae;',
			'icon-flattr' : '&#xe1af;',
			'icon-foursquare' : '&#xe1b0;',
			'icon-foursquare-2' : '&#xe1b1;',
			'icon-paypal' : '&#xe1b2;',
			'icon-paypal-2' : '&#xe1b4;',
			'icon-yelp' : '&#xe1b3;',
			'icon-libreoffice' : '&#xe1b5;',
			'icon-file-pdf' : '&#xe1b6;',
			'icon-file-openoffice' : '&#xe1b7;',
			'icon-file-word' : '&#xe1b8;',
			'icon-file-excel' : '&#xe1b9;',
			'icon-file-zip' : '&#xe1ba;',
			'icon-file-powerpoint' : '&#xe1bb;',
			'icon-file-xml' : '&#xe1bc;',
			'icon-file-css' : '&#xe1bd;',
			'icon-html5' : '&#xe1be;',
			'icon-html5-2' : '&#xe1bf;',
			'icon-css3' : '&#xe1c0;',
			'icon-chrome' : '&#xe1c1;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};