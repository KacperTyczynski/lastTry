const Feedparser = require('../src/utils/fp2.js')


describe('Test feedparsera', () => {
  let blob
  const url = ['http://blogs.nasa.gov/stationreport/feed/','http://blogs.nasa.gov/stationreport/feed/']

  beforeAll( () =>{
    blob = new Feedparser()
  })
  /*
  test('powinno sparsowac url', async () => {
    try{
      const array = new Array()
      const res = await blob.feedparser(url)
      array.push(res)
      expect(array).toContain(url)
    }catch(e){
      throw(e)
    }
    */

    test('powinno sparsowac url', async () => {
      try{
        const res = await blob.feedparser(url)
        expect(res)
      }catch(e){
        throw(e)
      }

  })

})
