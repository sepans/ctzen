interface Options {
  option1?: string
  option2?: string
  option3?: string
  option4?: string
  option5?: string
}

const OPTION_DEFAULTS = [
  { index: 1, text: 'strongly disagree' },
  { index: 2, text: 'somewhat disagree' },
  { index: 3, text: 'neither agree nor disagree' },
  { index: 4, text: 'somewhat agree' },
  { index: 5, text: 'strongly agree' },
]

export const optionArray = (
  options: any
): { index: number; text: string }[] => {
  // const { option1, option2, option3, option4, option5 } = options
  const hasOptions = hasAnyOption(options)
  const optionArr = hasOptions
    ? Object.keys(options)
        .filter(key => key.indexOf('option') > -1 && options[key])
        .map(optionKey => {
          const i = parseInt(optionKey.split('n')[1])
          return { index: i, text: options[optionKey] }
        })
    : OPTION_DEFAULTS

  return optionArr
}

export const hasAnyOption = (options: Options): boolean => {
  return Object.keys(options).reduce((acc: boolean, optionKey: string) => {
    const option = options[optionKey]
    return acc || (option !== null && option.length > 0)
  }, false)
}
