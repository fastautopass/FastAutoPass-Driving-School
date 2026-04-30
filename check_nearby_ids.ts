
import { ALL_LOCATIONS } from './constants';

const allIds = ALL_LOCATIONS.map(a => a.id);
const invalidNearby = [];

ALL_LOCATIONS.forEach(area => {
  area.nearbyIds?.forEach(nearbyId => {
    if (!allIds.includes(nearbyId)) {
      invalidNearby.push({
        area: `${area.city}/${area.id}`,
        invalidId: nearbyId
      });
    }
  });
});

console.log('Invalid nearbyIds:', JSON.stringify(invalidNearby, null, 2));
