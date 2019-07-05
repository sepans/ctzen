export const optionArray = ({ option1, option2, option3, option4, option5 }): Array<String> => [
  option1 || 'strongly agree',
  option2 || 'somehow agree',
  option3 || 'neither agree nor disagree',
  option4 || 'somehow disagree',
  option5 || 'strongly disagree'
]