import { whosOnline } from './v1_online';

describe('whosOnline()', () => {
  it('should find one of each case', () => {
    ////
    // One is online, one is away, and one is offline.
    //
    const oneOfEach = [
      {
        username: 'David',
        status: 'online',
        lastActivity: 10
      },
      {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
      },
      {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
      }
    ];

    expect(whosOnline(oneOfEach)).toEqual({
      online: ['David'],
      offline: ['Lucy'],
      away: ['Bob']
    });
  });

  it('should find no one online', () => {
    ////
    // Bob status says ‘online’ but last activity is 104 minutes, which
    // as per the instructions means he is away. He is online but away.
    //
    const noOneOnline = [
      {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
      },
      {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
      }
    ]

    expect(
      whosOnline(noOneOnline)
    ).toEqual({
      offline: ['Lucy'],
      away: ['Bob']
    });
  });
});

