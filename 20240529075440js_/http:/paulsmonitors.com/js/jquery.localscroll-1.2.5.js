var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/**
 * jQuery.LocalScroll
 * Copyright (c) 2007-2008 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/10/2008
 *
 * @projectDescription Animated scrolling navigation, using anchors.
 * http://flesler.blogspot.com/2007/10/jquerylocalscroll-10.html
 * @author Ariel Flesler
 * @version 1.2.5
 *
 * @id jQuery.fn.localScroll
 * @param {Object} settings Hash of settings, it is passed in to jQuery.ScrollTo, none is required.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @example $('ul.links').localScroll();
 *
 * @example $('ul.links').localScroll({ filter:'.animated', duration:400, axis:'x' });
 *
 * @example $.localScroll({ target:'#pane', axis:'xy', queue:true, event:'mouseover' });
 *
 * Notes:
 *	- The plugin requires jQuery.ScrollTo.
 *	- The hash of settings, is passed to jQuery.ScrollTo, so the settings are valid for that plugin as well.
 *	- jQuery.localScroll can be used if the desired links, are all over the document, it accepts the same settings.
 *  - If the setting 'lazy' is set to true, then the binding will still work for later added anchors.
 *  - The setting 'speed' is deprecated, use 'duration' instead.
 *	- If onBefore returns false, the event is ignored.
 **/
;(function( $ ){
	var URI = location.href.replace(/#.*/,'');//local url without hash

	var $localScroll = $.localScroll = function( settings ){
		$('body').localScroll( settings );
	};

	//Many of these defaults, belong to jQuery.ScrollTo, check it's demo for an example of each option.
	//@see http://www.freewebs.com/flesler/jQuery.ScrollTo/
	$localScroll.defaults = {//the defaults are public and can be overriden.
		duration:1000, //how long to animate.
		axis:'y',//which of top and left should be modified.
		event:'click',//on which event to react.
		stop:true//avoid queuing animations 
		/*
		lock:false,//ignore events if already animating
		lazy:false,//if true, links can be added later, and will still work.
		target:null, //what to scroll (selector or element). Keep it null if want to scroll the whole window.
		filter:null, //filter some anchors out of the matched elements.
		hash: false//if true, the hash of the selected link, will appear on the address bar.
		*/
	};

	//if the URL contains a hash, it will scroll to the pointed element
	$localScroll.hash = function( settings ){
		settings = $.extend( {}, $localScroll.defaults, settings );
		settings.hash = false;//can't be true
		if( location.hash )
			setTimeout(function(){ scroll( 0, location, settings ); }, 0 );//better wrapped with a setTimeout
	};

	$.fn.localScroll = function( settings ){
		settings = $.extend( {}, $localScroll.defaults, settings );

		return ( settings.persistent || settings.lazy ) 
				? this.bind( settings.event, function( e ){//use event delegation, more links can be added later.
					var a = $([e.target, e.target.parentNode]).filter(filter)[0];//if a valid link was clicked.
					a && scroll( e, a, settings );//do scroll.
				})
				: this.find('a')//bind concretely, to each matching link
						.filter( filter ).bind( settings.event, function(e){
							scroll( e, this, settings );
						}).end()
					.end();

		function filter(){//is this a link that points to an anchor and passes a possible filter ? href is checked to avoid a bug in FF.
			return !!this.href && !!this.hash && this.href.replace(this.hash,'') == URI && (!settings.filter || $(this).is( settings.filter ));
		};
	};

	function scroll( e, link, settings ){
		var id = link.hash.slice(1),
			elem = document.getElementById(id) || document.getElementsByName(id)[0];
		if ( elem ){
			e && e.preventDefault();
			var $target = $( settings.target || $.scrollTo.window() );//if none specified, then the window.

			if( settings.lock && $target.is(':animated') ||
			settings.onBefore && settings.onBefore.call(link, e, elem, $target) === false ) return;

			if( settings.stop )
				$target.queue('fx',[]).stop();//remove all its animations

			$target
				.scrollTo( elem, settings )//do scroll
				.trigger('notify.serialScroll',[elem]);//notify serialScroll about this change
			if( settings.hash )
				$target.queue(function(){
					location = link.hash;
				});
		}
	};

})( jQuery );

}
/*
     FILE ARCHIVED ON 17:33:27 Mar 10, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:50:27 Sep 16, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.401
  exclusion.robots: 0.057
  exclusion.robots.policy: 0.041
  esindex: 0.014
  cdx.remote: 52.729
  LoadShardBlock: 82.494 (3)
  PetaboxLoader3.datanode: 888.026 (5)
  load_resource: 1148.78 (2)
  PetaboxLoader3.resolve: 299.972 (2)
*/