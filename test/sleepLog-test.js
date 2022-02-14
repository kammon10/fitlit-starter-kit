import { expect } from 'chai';
import SleepLog from '../src/classes/SleepLog';

describe('SleepLog', () => {

let sleepLog;
let data;
beforeEach(() => {
 data = {
   "userID":1,
   "date":"2019/06/15",
   "hoursSlept":6.1,
   "sleepQuality":2.2
 }
  sleepLog = new SleepLog(data)
});

it(' should be a function', () => {
  expect(SleepLog).to.be.a('function')
});

it('should be an instance of SleepLog', () => {
  expect(sleepLog).to.be.an.instanceof(SleepLog)
});

it('should have a property of userID', () => {
  expect(sleepLog.userID).to.equal(1)
});

it('should have a property of date', () => {
     expect(sleepLog.date).to.equal("2019/06/15")
});

it('should have a property of hoursSlept', () => {
  expect(sleepLog.hoursSlept).to.equal(6.1)
});

it('should have a property of sleepQuality', () => {
  expect(sleepLog.sleepQuality).to.equal(2.2)
  });
});