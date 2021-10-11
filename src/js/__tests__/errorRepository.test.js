import ErrorRepository from '../errorRepository';

test('должен возвращать строку "unknown error" при отсутствии кода ошибки', () => {
  const err = new ErrorRepository();
  expect(err.translate(500)).toEqual('Unknown error');
});

test('должен выдавать описание ошибки', () => {
  const err = new ErrorRepository();
  expect(err.translate(404)).toEqual('page not found');
});
