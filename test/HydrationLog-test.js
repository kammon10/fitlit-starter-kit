import { expect } from 'chai';
import HydrationLog from '../src/classes/HydrationLog';
import testData from './test-data';

describe('HydrationLog', () => {
  let hydrationLog;
  let data;

  beforeEach(() => {
    data = testData.hydrationData[2];
    hydrationLog = new HydrationLog(data)
  });

  it(' should be a function', () => {
    expect(HydrationLog).to.be.a('function')
  });

  it('should be an instance of HydrationLog', () => {
    expect(hydrationLog).to.be.an.instanceof(HydrationLog)
  });

  it('should have a property of userID', () => {
    expect(hydrationLog.userID).to.equal(1)
  });

  it('should have a property of date', () => {
    expect(hydrationLog.date).to.equal("2019/06/17")
  });

  it('should have a property of numOunces', () => {
    expect(hydrationLog.numOunces).to.equal(96)
  });
});
