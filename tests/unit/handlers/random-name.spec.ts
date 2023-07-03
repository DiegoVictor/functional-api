import { faker } from '@faker-js/faker';
import { getMockRes, getMockReq } from '@jest-mock/express';

import * as randomNameController from '@handlers/random-name';

const mockGetRandom = jest.fn();
jest.mock('@application/use-cases', () => ({
  randomName: {
    getRandom: () => mockGetRandom(),
  },
}));

describe('Random Name Handlers', () => {
  it('should be able to get random names', async () => {
    const names = faker.lorem.words().split(' ');

    const request = getMockReq();
    const { res: response } = getMockRes();

    mockGetRandom.mockResolvedValueOnce(names);

    await randomNameController.getRandom(request, response);

    expect(mockGetRandom).toHaveBeenCalled();
    expect(response.json).toHaveBeenCalledWith(names);
  });
});
