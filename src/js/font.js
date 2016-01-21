(function ($, fluid){
    "use strict";
    fluid.defaults("gpii.firstDiscovery.panel.font",{
        gradeNames: ["gpii.firstDiscovery.panel.fontYesNo"],
        preferenceMap: {
            "gpii.firstDiscovery.font": {
                "model.value" : "default"
            }
        }
    });
})(jQuery, fluid);
