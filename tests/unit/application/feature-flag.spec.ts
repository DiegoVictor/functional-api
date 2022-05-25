import { randomUUID } from 'crypto';
import faker from '@faker-js/faker';

import * as featureFlag from '../../../src/application/use-cases/feature-flag';

const mockResolve = jest.fn();
jest.mock('../../../src/application/services/resolve', () => ({
  resolve: (name: string) => mockResolve(name),
}));

describe('Feature Flag Use Cases', () => {
  const flags = [
    {
      id: randomUUID(),
      key: faker.lorem.word(),
      description: faker.lorem.sentence(),
      active: true,
    },
  ];

  it('should be able to get all flags', async () => {
    const getAll = jest.fn().mockResolvedValueOnce(flags);
    mockResolve.mockReturnValueOnce({ getAll });

    const response = await featureFlag.getAll();

    expect(mockResolve).toHaveBeenCalledWith('FeatureFlagRepository');
    expect(getAll).toHaveBeenCalled();
    expect(response).toStrictEqual(flags);
  });

  it('should be able to get one flag by key', async () => {
    const [flag] = flags;
    const getOneByKey = jest.fn().mockResolvedValueOnce(flag);
    mockResolve.mockReturnValueOnce({ getOneByKey });

    const response = await featureFlag.getOneByKey(flag.key);

    expect(mockResolve).toHaveBeenCalledWith('FeatureFlagRepository');
    expect(getOneByKey).toHaveBeenCalledWith(flag.key);
    expect(response).toStrictEqual(flag);
  });
});
