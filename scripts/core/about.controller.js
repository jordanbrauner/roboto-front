(function() {
  "use strict";

  angular
    .module("campaigns")
    .controller("RobotoAboutController", [
      "CampaignFactory",
      ControllerFunction
    ]);

  function ControllerFunction(CampaignFactory) {

    // Scroll to top of page on state change
    $("html, body").animate({ scrollTop: 0 }, 200);

    this.campaigns = CampaignFactory.query();
  }

})();
