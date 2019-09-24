export const optionArray = ({
  option1,
  option2,
  option3,
  option4,
  option5,
}): Array<String> => [
  option1 || 'strongly disagree',
  option2 || 'somewhat disagree',
  option3 || 'neither agree nor disagree',
  option4 || 'somewhat agree',
  option5 || 'strongly agree',
]
