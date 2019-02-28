import { Hero } from './hero';

describe('Hero', () => {
  it('should create an instance', () => {
    expect(new Hero(2, 'name', 'power')).toBeTruthy();
  });
});
