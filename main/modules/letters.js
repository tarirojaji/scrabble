
export let letters = {
    a: {
      num: 9,
      points: 1
    },
    b: {
      num: 2,
      points: 3
    },
    c: {
      num: 2,
      points: 3
    }, 
    d: {
      num: 4,
      points: 2
    }, 
    e: {
      num: 12,
      points: 1
    }, 
    f: {
      num: 2,
      points: 4
    },  
    g: {
      num: 3,
      points: 2
    }, 
    h: {
      num: 2,
      points: 4
    },
    i: {
      num: 9,
      points: 1
    },
    j: {
      num: 1,
      points: 8
    },
    k: {
      num: 1,
      points: 5
    },
    l: {
      num: 4,
      points: 1
    },
    m: {
      num: 2,
      points: 3
    },  
    n: {
      num: 6,
      points: 1
    },  
    o: {
      num: 8,
      points: 1
    },
    p: {
      num: 2,
      points: 3
    },
    q: {
      num: 1,
      points: 10
    },
    r: {
      num: 6,
      points: 1
    },
    s: {
      num: 4,
      points: 1
    },
    t: {
      num: 6,
      points: 1
    },
    u: {
      num: 4,
      points: 1
    },
    v: {
      num: 2,
      points: 4
    },
    w: {
      num: 2,
      points: 4
    },
    x: {
      num: 1,
      points: 8
    },
    y: {
      num: 2,
      points: 4
    },
    z: {
      num: 1,
      points: 10
    },
    '_': {
      num: 2,
      points: 0
    }
  };


export let ltrArr = []
function bagTiles() {
  for (const key in letters) {
    // console.log(letters[key])
   let num = letters[key].num
  //  let points = letters[key].points
   for (let i = 0; i < num; i++) {
    //  console.log(key[i])
    // console.log(points)
    ltrArr.push(key)
   }
  }
}
// console.log(ltrArr);
bagTiles();

export function ltrsRemaining() {
  const bag = document.querySelector('.bag')
  bag.textContent = `Letters Remaining: ${ltrArr.length}`
}

  







  