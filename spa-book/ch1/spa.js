/* jslint settings */

// Module /spa/
// Provides chat slider capability
let spa = (function($) {
    // Module scope variables
  let
    configMap = { 
        extended_height: 434,
        extended_title: 'Click to retract',
        retracted_height: 16,
        retracted_title: 'Click to expand',
        template_html:'<div class="spa-slider"></div>'
    },
    $chatSlider,
    toggleSlider, onClickSlider, initModule;

    // DOM method /toggleSlider/
    // alternates slider height
    //
    toggleSlider = function () {
        let slider_height = $chatSlider.height();
        if(slider_height === configMap.retracted_height) {
            $chatSlider
                .animate({height: configMap.extended_height})
                .attr('title', configMap.extended_title);
            return true;
        } else if (slider_height === configMap.extended_height) {
            $chatSlider
                .animate({height: configMap.retracted_height})
                .attr('title', configMap.retracted_title);
            return true;
        }
        return false;
    };

    // Event handler /onClickSlider/
    // receives click event and calls toggleSlider
    //
    onClickSlider = function ( event ) {
        toggleSlider();
        return false;
    };

    // Public method /initModule/
    // sets initial state and provides feature
    //
    initModule = function ( $container ) {
        // render HTML
        $container.html(configMap.template_html);
        $chatSlider = $container.find('.spa-slider');
        // initialize slider height and title
        // bind the user click event to the event handler
        $chatSlider
            .attr('title', configMap.retracted_title)
            .click(onClickSlider);
        return true;
    };
    return {initModule: initModule};
}(jQuery));
// Start spa once DOM is ready
jQuery(document).ready(
    function(){
        spa.initModule(jQuery('#spa'));
    }
);