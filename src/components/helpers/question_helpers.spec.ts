import { hasAnyOption, optionArray } from './question_helpers'
describe('hasAnyOption', () => {
  it('returns true when any option is present', () => {
    expect(hasAnyOption({ option3: 'foo' })).toBe(true)
    expect(hasAnyOption({ option3: 'foo', option4: 'bar' })).toBe(true)
  })
  it('returns false when there is no option', () => {
    expect(hasAnyOption({})).toBe(false)
    expect(hasAnyOption({ option3: '' })).toBe(false)
  })
})

describe('optionArray', () => {
  it('returns all options as an array', () => {
    expect(
      optionArray({
        option1: 'foo1',
        option2: 'foo2',
        option3: 'foo3',
        option4: 'foo4',
        option5: 'foo5',
      })
    ).toEqual([
      { index: 1, text: 'foo1' },
      { index: 2, text: 'foo2' },
      { index: 3, text: 'foo3' },
      { index: 4, text: 'foo4' },
      { index: 5, text: 'foo5' },
    ])
  })
  it('returns all options as an array', () => {
    expect(
      optionArray({
        option3: 'foo3',
        option5: 'foo5',
      })
    ).toEqual([{ index: 3, text: 'foo3' }, { index: 5, text: 'foo5' }])
  })
  it('returns defaults when options are not provided', () => {
    expect(optionArray({})).toEqual([
      { index: 1, text: 'strongly disagree' },
      { index: 2, text: 'somewhat disagree' },
      { index: 3, text: 'neither agree nor disagree' },
      { index: 4, text: 'somewhat agree' },
      { index: 5, text: 'strongly agree' },
    ])
  })
})
