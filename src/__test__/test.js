import { slugify } from 'sluggin.js';

describe('Sluggin.js', () => {
  it('should slugify a string', () => {
    expect(slugify('This is a test')).toEqual('this-is-a-test');
  });

  it('should slugify an array of strings', () => {
    expect(slugify(['This', 'is', 'a', 'test'])).toEqual('this-is-a-test');
  });

  it('should handle special characters', () => {
    expect(slugify('This is a test with spaces and special characters!')).toEqual('this-is-a-test-with-spaces-and-special-characters');
  });
});
