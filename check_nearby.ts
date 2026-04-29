
import { ALL_LOCATIONS } from './constants';

const allIds = new Set(ALL_LOCATIONS.map(a => a.id));
const missing = [];

ALL_LOCATIONS.forEach(area => {
    if (area.nearbyIds) {
        area.nearbyIds.forEach(nearbyId => {
            if (!allIds.has(nearbyId)) {
                missing.push({ area: area.id, missing: nearbyId });
            }
        });
    }
});

console.log(JSON.stringify(missing, null, 2));
