import _ from 'lodash';
import { ListingModel } from '../dex';

export function convertListingToDictionary(models: Array<ListingModel>) {
  let dictionary = {};

  _.each(models, (model) => {
    dictionary = _.assign(dictionary, {
      [model.address]: { ...model }
    });
  });
  return dictionary;
}
