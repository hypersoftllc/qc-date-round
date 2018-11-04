/* eslint-env mocha */
const chai = require('chai')

const { round } = require('../date-round')

const expect = chai.expect

describe('round', () => {
  describe('called with 250', () => {
    it('should round to nearest 250 milliseconds', () => {
      let dateIn
      let dateOut

      dateIn = new Date(Date.UTC(2000, 1, 2, 3, 4, 5))

      dateIn.setMilliseconds(100)
      dateOut = round(dateIn, 250)
      expect(dateOut.getTime()).to.equal(949460645000)

      dateIn.setMilliseconds(125)
      dateOut = round(dateIn, 250)
      expect(dateOut.getTime()).to.equal(949460645250)

      dateIn.setMilliseconds(200)
      dateOut = round(dateIn, 250)
      expect(dateOut.getTime()).to.equal(949460645250)

      dateIn.setMilliseconds(300)
      dateOut = round(dateIn, 250)
      expect(dateOut.getTime()).to.equal(949460645250)

      dateIn.setMilliseconds(375)
      dateOut = round(dateIn, 250)
      expect(dateOut.getTime()).to.equal(949460645500)

      dateIn.setMilliseconds(400)
      dateOut = round(dateIn, 250)
      expect(dateOut.getTime()).to.equal(949460645500)

      dateIn.setMilliseconds(500)
      dateOut = round(dateIn, 250)
      expect(dateOut.getTime()).to.equal(949460645500)

      dateIn.setMilliseconds(600)
      dateOut = round(dateIn, 250)
      expect(dateOut.getTime()).to.equal(949460645500)

      dateIn.setMilliseconds(625)
      dateOut = round(dateIn, 250)
      expect(dateOut.getTime()).to.equal(949460645750)

      dateIn.setMilliseconds(700)
      dateOut = round(dateIn, 250)
      expect(dateOut.getTime()).to.equal(949460645750)

      dateIn.setMilliseconds(800)
      dateOut = round(dateIn, 250)
      expect(dateOut.getTime()).to.equal(949460645750)

      dateIn.setMilliseconds(900)
      dateOut = round(dateIn, 250)
      expect(dateOut.getTime()).to.equal(949460646000)
    })
  })

  describe('called with 1000', () => {
    it('should round to nearest second', () => {
      let dateIn
      let dateOut

      dateIn = new Date(Date.UTC(2000, 1, 2, 3, 4, 5))

      dateIn.setMilliseconds(250)
      dateOut = round(dateIn, 1000)
      expect(dateOut.getTime()).to.equal(949460645000)

      dateIn.setMilliseconds(500)
      dateOut = round(dateIn, 1000)
      expect(dateOut.getTime()).to.equal(949460646000)

      dateIn.setMilliseconds(750)
      dateOut = round(dateIn, 1000)
      expect(dateOut.getTime()).to.equal(949460646000)
    })
  })

  describe('called with 2000', () => {
    it('should round to nearest two seconds', () => {
      let dateIn
      let dateOut

      dateIn = new Date(Date.UTC(2000, 1, 2, 3, 4, 5))

      dateIn.setMilliseconds(0)
      dateOut = round(dateIn, 2000)
      expect(dateOut.getTime()).to.equal(949460646000)

      dateIn.setMilliseconds(500)
      dateOut = round(dateIn, 2000)
      expect(dateOut.getTime()).to.equal(949460646000)

      dateIn = new Date(Date.UTC(2000, 1, 2, 3, 4, 6))

      dateIn.setMilliseconds(0)
      dateOut = round(dateIn, 2000)
      expect(dateOut.getTime()).to.equal(949460646000)

      dateIn.setMilliseconds(500)
      dateOut = round(dateIn, 2000)
      expect(dateOut.getTime()).to.equal(949460646000)

      dateIn = new Date(Date.UTC(2000, 1, 2, 3, 4, 7))

      dateIn.setMilliseconds(0)
      dateOut = round(dateIn, 2000)
      expect(dateOut.getTime()).to.equal(949460648000)

      dateIn = new Date(Date.UTC(2000, 1, 2, 3, 4, 7))

      dateIn.setMilliseconds(500)
      dateOut = round(dateIn, 2000)
      expect(dateOut.getTime()).to.equal(949460648000)
    })
  })

  describe('called with 5000', () => {
    it('should round to nearest five seconds', () => {
      let dateIn
      let dateOut

      dateIn = new Date(Date.UTC(2000, 1, 2, 3, 4, 5))

      dateIn.setMilliseconds(500)
      dateOut = round(dateIn, 5000)
      expect(dateOut.getTime()).to.equal(949460645000)

      dateIn = new Date(Date.UTC(2000, 1, 2, 3, 4, 7))

      dateIn.setMilliseconds(500)
      dateOut = round(dateIn, 5000)
      expect(dateOut.getTime()).to.equal(949460650000)

      dateIn = new Date(Date.UTC(2000, 1, 2, 3, 4, 12))

      dateIn.setMilliseconds(500)
      dateOut = round(dateIn, 5000)
      expect(dateOut.getTime()).to.equal(949460655000)
    })
  })

  describe('called with 900000', () => {
    it('should round to nearest 15 minutes', () => {
      let dateIn
      let dateOut
      let interval = 15 * 60 * 1000

      dateIn = new Date(Date.UTC(2000, 1, 2, 3, 4, 5))
      dateOut = round(dateIn, interval)
      expect(dateOut.getTime()).to.equal(Date.UTC(2000, 1, 2, 3, 0, 0))

      dateIn = new Date(Date.UTC(2000, 1, 2, 3, 7, 30))
      dateOut = round(dateIn, interval)
      expect(dateOut.getTime()).to.equal(Date.UTC(2000, 1, 2, 3, 15, 0))

      dateIn = new Date(Date.UTC(2000, 1, 2, 3, 10, 0))
      dateOut = round(dateIn, interval)
      expect(dateOut.getTime()).to.equal(Date.UTC(2000, 1, 2, 3, 15, 0))

      dateIn = new Date(Date.UTC(2000, 1, 2, 3, 22, 30))
      dateOut = round(dateIn, interval)
      expect(dateOut.getTime()).to.equal(Date.UTC(2000, 1, 2, 3, 30, 0))

      dateIn = new Date(Date.UTC(2000, 1, 2, 3, 37, 30))
      dateOut = round(dateIn, interval)
      expect(dateOut.getTime()).to.equal(Date.UTC(2000, 1, 2, 3, 45, 0))

      dateIn = new Date(Date.UTC(2000, 1, 2, 3, 52, 29))
      dateOut = round(dateIn, interval)
      expect(dateOut.getTime()).to.equal(Date.UTC(2000, 1, 2, 3, 45, 0))

      dateIn = new Date(Date.UTC(2000, 1, 2, 3, 52, 30))
      dateOut = round(dateIn, interval)
      expect(dateOut.getTime()).to.equal(Date.UTC(2000, 1, 2, 4, 0, 0))
    })
  })

  describe('called with 360000', () => {
    it('should round to nearest hour', () => {
      let dateIn
      let dateOut
      let interval = 60 * 60 * 1000

      dateIn = new Date(Date.UTC(2000, 0, 1, 2, 34, 56))
      dateOut = round(dateIn, interval)
      expect(dateOut.getTime()).to.equal(Date.UTC(2000, 0, 1, 3, 0, 0))

      dateIn = new Date(Date.UTC(2000, 1, 29, 2, 23, 23))
      dateOut = round(dateIn, interval)
      expect(dateOut.getTime()).to.equal(Date.UTC(2000, 1, 29, 2, 0, 0))
    })
  })
})
