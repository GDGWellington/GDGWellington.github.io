angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        'name'          : 'GDG Wellington',
        'id'            : '110276737562460152992',
        'googleApi'     : 'AIzaSyDhTqAFaMkLDAjKJd9CvItG4tLhQW_0GIo',
        'pwaId'         : '6278826211524490033', // Picasa Web Album id, must belong to Google+ id above
        'domain'        : 'http://www.gdg.nz',
        'twitter'       : 'gdgwellington',
        'facebook'      : '',
        'youtube'       : '',
        'meetup'        : 'GDG-Wellington',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, MMMM d, y - h:mm a',
        'cover' : {
            title: 'Worldwide GDG Events',
            subtitle: 'Directory of developer events organized by tags and displayed on a global map.',
            button: {
                text: 'Find local events',
                url: 'http://gdg.events/'
            }
        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: true,
            devFests: true,
            appClinics: true,
            panels: true,
            designSprints: true,
            roundTables: true
        },
        'HUB_IP': 'https://hub.gdgx.io'
    };
});
