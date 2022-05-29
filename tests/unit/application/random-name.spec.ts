import faker from '@faker-js/faker';

import * as randomName from '@application/use-cases/random-name';

const mockResolve = jest.fn();
jest.mock('@lib/resolver', () => ({
  resolve: (name: string) => mockResolve(name),
}));

describe('Random Name', () => {
  it('should be able to get random names', async () => {
    const names = faker.lorem.words().split(' ');
    const getOneByKey = jest.fn().mockResolvedValueOnce({ active: false });
    const getNames = jest.fn().mockResolvedValueOnce(names);

    mockResolve
      .mockReturnValueOnce({ getOneByKey })
      .mockReturnValueOnce({ getNames });

    const response = await randomName.getRandom();

    expect(getOneByKey).toHaveBeenCalledWith('encode_output');
    expect(getNames).toHaveBeenCalled();
    expect(mockResolve).toHaveBeenCalledWith('FeatureFlagRepository');
    expect(mockResolve).toHaveBeenCalledWith('NameService');
    expect(response).toStrictEqual(names);
  });

  it('should be able to get random names base64 encoded', async () => {
    const names = faker.lorem.words().split(' ');
    const getOneByKey = jest.fn().mockResolvedValueOnce({ active: true });
    const getNames = jest.fn().mockResolvedValueOnce(names);

    mockResolve
      .mockReturnValueOnce({ getOneByKey })
      .mockReturnValueOnce({ getNames });

    const response = await randomName.getRandom();

    expect(getOneByKey).toHaveBeenCalledWith('encode_output');
    expect(getNames).toHaveBeenCalled();
    expect(mockResolve).toHaveBeenCalledWith('FeatureFlagRepository');
    expect(mockResolve).toHaveBeenCalledWith('NameService');
    expect(response).toStrictEqual(
      Buffer.from(JSON.stringify(names)).toString('base64')
    );
  });
});
