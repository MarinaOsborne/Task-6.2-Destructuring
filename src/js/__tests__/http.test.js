
import { httpGet, httpPost } from '../http';

test('should call httpGet once', () => {
  expect(() => {
    httpGet();
  }).toThrow();
});

test('should call httpPost once', () => {
  expect(() => {
    httpPost();
  }).toThrow();
});
