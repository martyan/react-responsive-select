import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import getInitialOption from './getInitialOption';
import state from '../../../mocha/state-mock';

describe('getInitialOption', () => {
  deepFreeze(state);

  it('should return then first option', () => {
    const result = getInitialOption(state);
    expect(result).to.eql({
      altered: false,
      isDragging: false,
      multiselect: false,
      isOptionsPanelOpen: false,
      isTouchDevice: false,
      multiSelectInitialSelectedIndexes: [1, 2, 3],
      multiSelectSelectedIndexes: [0],
      multiSelectSelectedOptions: {
        options: [{
          name: 'Make 1',
          value: 'null',
          text: 'Any',
        }],
      },
      name: 'Make 1',
      nextPotentialSelectionIndex: 0,
      options: [{
        text: 'Any',
        value: 'null',
      }, {
        text: 'Fiat',
        value: 'fiat',
      }, {
        text: 'Subaru',
        value: 'subaru',
      }, {
        text: 'BMW',
        value: 'bmw',
      }, {
        text: 'Tesla',
        value: 'tesla',
      }],
      singleSelectInitialIndex: 0,
      singleSelectSelectedIndex: 0,
      singleSelectSelectedOption: {},
    });
  });
});
