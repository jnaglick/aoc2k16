'use strict'

const chksum = (s) => {
  const d_to_freq = s.split('') // ascii to frequency
  .reduce((d_to_freq, c) => { 
    let d = c.charCodeAt();
    d_to_freq[d] = d_to_freq[d] ? d_to_freq[d] + 1 : 1;
    return d_to_freq;
  }, {});

  const freq_to_ds = Object.keys(d_to_freq) // frequency to asciis
  .reduce((freq_to_ds, d) => { 
    let freq = d_to_freq[d];
    freq_to_ds[freq] = freq_to_ds[freq] ? freq_to_ds[freq].concat(d) : [d];
    return freq_to_ds;
  }, {});

  return Object.keys(freq_to_ds)
  .sort((a, b) => (b - a)) // high to low frequencies
  .reduce((chksum, freq) => {
    let chksum_part = freq_to_ds[freq]
                      .sort((a, b) => (a - b)) // low to high alpha
                      .map((d) => (String.fromCharCode(d)))
                      .join('');
    return chksum + chksum_part;
  }, '')
  .substr(0, 5);
}

const total = require('fs').readFileSync('input').toString().trim().split("\n")
              .map((s) => {
                let a = s.split(/-/);
                let metadata = a.pop();
                let data = a.join('');
                return {
                  realChksum:   chksum(data),
                  givenChksum:  metadata.match(/[a-z]+/)[0],
                  sector:       metadata.match(/[\d]+/)[0]
                }
              })
              .filter((room) => {
                return room.realChksum == room.givenChksum;  
              })
              .reduce((sectorTotal, room) => {
                return sectorTotal + parseInt(room.sector, 10);
              }, 0);

console.log(total);
