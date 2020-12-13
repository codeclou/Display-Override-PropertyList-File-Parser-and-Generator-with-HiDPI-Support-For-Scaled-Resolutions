import CharsetAndEncodingHelper from './CharsetAndEncodingHelper';

describe('CharsetAndEncodingHelper test', () => {
  it('deepCopyOrReturnEmptyObject() works', () => {
    const helper = new CharsetAndEncodingHelper();
    expect(helper.deepCopyOrReturnEmptyObject({ foo: 'bar' })).toMatchObject({ foo: 'bar' });
  });
  // FIXME: Add more testcsases
});
