import contact from './contact'
import location from './location'

export default interface Restaurants  {
    id: number;
    name: string;
    backgroundImageURL: string;
    category: string;
    contact: contact;
    location: location;
    isActive: boolean
}