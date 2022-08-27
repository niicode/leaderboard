import Services from '../__mocks__/Service.js';

describe('work with promises', () => {
  test('should return a promise', () => {
    const service = new Services();
    const promise = service.getGameScore();
    expect(promise instanceof Promise).toBe(true);
  });

  test('should return an array', () => {
    const service = new Services();
    const promise = service.getGameScore();
    promise.then((data) => {
      expect(Array.isArray(data)).toBe(true);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      console.log('finally');
    });
  });

  test('should return an array with 3 items', () => {
    const service = new Services();
    const promise = service.getGameScore();
    promise.then((data) => {
      expect(data.length).toBe(3);
    });
  });
});

describe('Add new score', () => {
  test('should return a promise', () => {
    const service = new Services();
    const promise = service.addGameScore('jose', 10);
    expect(promise instanceof Promise).toBe(true);
  });

  test('should return a new score', () => {
    const service = new Services();
    const promise = service.addGameScore('jose', 10);
    promise.then((data) => {
      expect(data.user).toBe('jose');
      expect(data.score).toBe(10);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      console.log('finally');
    });
  });

  test('should return length of scores array', () => {
    const service = new Services();
    service.getGameScore().then((data) => {
      expect(data.length).toBe(5);
    });
  });
});