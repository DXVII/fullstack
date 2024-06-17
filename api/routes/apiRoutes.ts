import Router from 'express-promise-router';
import getRoute from './getRoute';
import putRoute from './putRoute';
import delRoute from './delRoute';

export function apiRoutes(route: string) {
    const router = Router();
    const generateRoutes = (route) => {
        router.get(route, getRoute());
        router.put(route, putRoute());
        router.del(route, delRoute());
        // router.post(route, postRoute());
    }

    return router;
}

export default apiRoutes