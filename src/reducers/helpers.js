import plants_json from '../components/data/plants.json';

export function createPlant(id) {
  return plants_json.find(p => p.id === id);
}
