import config from '~/config';
// Layout

// Pages
import Home from '~/pages/Home';
import Favorite from '~/pages/Favorite/';
import Movies from '~/pages/Movies';
import Comedy from '~/pages/Comedy/';
import MusicVideos from '~/pages/MusicVideos/';
import Shows from '~/pages/Shows/';
import ComingSoon from '~/pages/CommingSoon/';

//public routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
        title: 'Home',
    },
    {
        path: config.routes.favorite,
        component: Favorite,
        title: 'Favorite movies',
    },
    {
        path: config.routes.movies,
        component: Movies,
        title: 'Movies',
    },
    {
        path: config.routes.shows,
        component: Shows,
        title: 'Shows',
    },
    {
        path: config.routes.comedy,
        component: Comedy,
        title: 'Comedy',
    },
    {
        path: config.routes.musicVideo,
        component: MusicVideos,
        title: 'Music Videos',
    },

    {
        path: config.routes.other,
        component: ComingSoon,
        title: 'Coming Soon...',
    },
    {
        path: config.routes.other2,
        component: ComingSoon,
        title: 'Coming Soon...',
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
