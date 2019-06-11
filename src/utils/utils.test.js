import { formatDate } from '.';

describe('Format date before october', () => {
  it('Should format the date to a readable format', () => {
    const formattedDate = formatDate('2019-05-17T12:56:21.406849Z');
    expect(formattedDate).toBe('Fri 17 May 2019');
  });

  it('Should format the date to a rgit addeadable format', () => {
    const formattedDate = formatDate('2019-05-07T12:56:21.406849Z');
    expect(formattedDate).toBe('Tue 07 May 2019');
  });
});
