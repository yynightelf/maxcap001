sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/maxfullstackcap001/test/integration/FirstJourney',
		'ns/maxfullstackcap001/test/integration/pages/IncidentsList',
		'ns/maxfullstackcap001/test/integration/pages/IncidentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/maxfullstackcap001') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);