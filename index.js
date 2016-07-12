#!/usr/bin/env node
import laz from 'commander';
import ncp from 'copy-paste';

laz.version('0.0.1');

// ----- Utils
const copy = (thing) => {
    ncp.copy(thing, () => console.log('(was copied to clipboard)'));
}

export const getRandomIntInclusive = (min=1, max=6) => {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

const isNumber = (n) => typeof n === 'number';

const getTodaysDate = () => new Date().toLocaleDateString();

const info = (message) => { console.log('LAZ >', message); };
const debug = (message) => { console.log('[debug]', message) };

// ------ Factory

const givemeFunctions = {
  today: getTodaysDate,
  dice: getRandomIntInclusive
};

// ----- Core

laz
  .command('giveme [something]')
  .description('Display a thing')
  .option('-c, --copy', 'Copy to clipboard')
  .action(function (something, options) {
    if(Object.keys(givemeFunctions).indexOf(something) > -1) {
      let res = givemeFunctions[something]();
      console.log(res);
      if(options.copy) {
        copy(res.toString());
      }
    } else {
      info('Sorry, not in store =(');
    }
  });

// ----- Run
laz.parse(process.argv);
