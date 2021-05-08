// Board coordinates for normal & premium cells
// Coordinates found at https://codegolf.stackexchange.com/a/92062
const cellPos = [
  4, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 4,
  0, 3, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0,
  0, 0, 3, 0, 0, 0, 1, 0, 1, 0, 0, 0, 3, 0, 0,
  1, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 1,
  0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0,
  0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0,
  0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0,
  4, 0, 0, 1, 0, 0, 0, 5, 0, 0, 0, 1, 0, 0, 4,
  0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0,
  0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0,
  0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0,
  1, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 1,
  0, 0, 3, 0, 0, 0, 1, 0, 1, 0, 0, 0, 3, 0, 0,
  0, 3, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0,
  4, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 4,
];

const cellPos02 = [
  1, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 4,
  0, 3, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0,
  0, 0, 3, 0, 0, 0, 1, 0, 1, 0, 0, 0, 3, 0, 0,
  1, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 1,
  0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0,
  0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0,
  0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0,
  4, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 4,
  0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0,
  0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0,
  0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0,
  1, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 1,
  0, 0, 3, 0, 0, 0, 1, 0, 1, 0, 0, 0, 3, 0, 0,
  0, 3, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0,
  4, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 1,
];


const specialObj = {
  1: {
    name: 'DL',
    color: '#5c77a1',
    index: [
      3, 11, 36, 38, 45, 52, 59, 92, 96, 98, 102, 108, 116,
      122, 126, 128, 132, 165, 172, 179, 186, 188, 213, 221,
    ],
  },
  2: {
    name: 'TL',
    color: '#023785',
    index: [20, 24, 76, 80, 84, 88, 136, 140, 144, 148, 215, 219],
  },
  3: {
    name: 'DW',
    color: '#e49288',
    index: [16, 28, 32, 42, 48, 56, 64, 70, 154, 160, 168, 176, 182, 192, 196, 208],
  },
  4: {
    name: 'TW',
    color: '#a9687d',
    index: [0, 7, 14, 105, 119, 210, 217, 224],
  },
  5: {
    name: '⭑',
    color: '#ff033e',
    index: [112],
  },
};

export { cellPos, specialObj, cellPos02 };
