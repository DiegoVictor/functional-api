import faker from '@faker-js/faker';

import { clear, resolve } from '../../../src/application/services/resolve';

const mockFactory = jest.fn();
jest.mock('../../../src/infra/factories', () => ({
  factories: {
    TestFactory: () => mockFactory(),
  },
}));

describe('resolve', () => {
  beforeEach(() => {
    clear();
  });

  it('should be able to resolve dependency', () => {
    const value = faker.datatype.uuid();
    mockFactory.mockReturnValueOnce(value);

    expect(resolve('TestFactory')).toBe(value);
    expect(mockFactory).toHaveBeenCalled();
  });

  it('should not be able to resolve dependency', () => {
    expect(() => resolve('InvalidFactory')).toThrowError(Error);
  });

  it('should be able to get a dependency already resolved', () => {
    const value = faker.datatype.uuid();
    mockFactory.mockReturnValue(value);

    expect(resolve('TestFactory')).toBe(value);
    expect(resolve('TestFactory')).toBe(value);
    expect(mockFactory).toHaveBeenCalledTimes(1);
  });
});
