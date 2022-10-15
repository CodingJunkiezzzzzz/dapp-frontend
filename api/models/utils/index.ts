import _ from 'lodash';
import { ListingModel } from '../dex';

export function convertListingToDictionary(models: Array<ListingModel>) {
  let dictionary: { [key: string]: ListingModel } = {};

  _.each(models, (model) => {
    dictionary = _.assign(dictionary, {
      [model.address.toLowerCase()]: { ...model }
    });
  });
  return dictionary;
}
