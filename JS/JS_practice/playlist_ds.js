let all_songlists = []

let musicPlayList = {
  owner: {account: 'user1', nickname: 'lee', isVip: true},
  playlist_name: 'lovesong',
  playlist_duration: 3000, //sum of song lengths
  
  songs: [
      {name: '喔', genre: 'string', length: 60, artist: '板橋金城武', album: '', isFavorited: true, playedＣount: 3},
      {name: '人生海海', genre: 'string', length: 60, artist: '炯和 AKA 千億', album: '', isFavorited: false, playedCount: 2 }
  ]}

all_songlists.push(musicPlayList)
console.log(all_songlists)
console.log(musicPlayList.songs[1])