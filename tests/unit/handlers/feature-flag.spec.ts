import { randomUUID } from 'crypto';
import faker from '@faker-js/faker';
import { getMockRes, getMockReq } from '@jest-mock/express';

import * as featureFlagController from '@handlers/feature-flag';

const mockGetAll = jest.fn();
const mockGetOneByKey = jest.fn();
jest.mock('@application/use-cases', () => ({
  featureFlag: {
    getAll: () => mockGetAll(),
    getOneByKey: () => mockGetOneByKey(),
  },
}));

describe('Feature Flag Handlers', () => {
  const flags = [
    {
      id: randomUUID(),
      key: faker.lorem.word(),
      description: faker.lorem.sentence(),
      active: true,
    },
  ];

  it('should be able to get all flags', async () => {
    mockGetAll.mockResolvedValueOnce(flags);

    const request = getMockReq();
    const { res: response } = getMockRes();

    await featureFlagController.getAll(request, response);

    expect(mockGetAll).toHaveBeenCalled();
    expect(response.json).toHaveBeenCalledWith(flags);
  });

  it('should be able to get one flag by key', async () => {
    const [flag] = flags;
    mockGetOneByKey.mockResolvedValueOnce(flag);

    const request = getMockReq({ params: { key: flag.key } });
    const { res: response } = getMockRes();

    await featureFlagController.getOneByKey(request, response);

    expect(mockGetOneByKey).toHaveBeenCalled();
    expect(response.json).toHaveBeenCalledWith(flag);
  });

  it('should not be able to get one flag by key', async () => {
    mockGetOneByKey.mockResolvedValueOnce(undefined);

    const request = getMockReq({ params: { key: faker.lorem.word() } });
    const { res: response } = getMockRes();

    await featureFlagController.getOneByKey(request, response);

    expect(mockGetOneByKey).toHaveBeenCalled();
    expect(response.status).toHaveBeenCalledWith(404);
    expect(response.json).toHaveBeenCalledWith({
      message: expect.any(String),
    });
  });
});
