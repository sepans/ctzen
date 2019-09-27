import React from 'react'
import { Box } from '@smooth-ui/core-sc'
import { Text, ReverseElementColors } from './Layout'

interface CategoriesProps {
  categories: Array<string>
  selected: string
}

const selectedCategory = (category: string, selected: string) =>
  category === selected

export const Categories: React.FC<CategoriesProps> = ({
  categories,
  selected,
}) => (
  <Box
    display="flex"
    p={2}
    flexDirection="row"
    justifyContent="space-evenly"
    {...ReverseElementColors}
  >
    {categories.map(category => {
      const color = selectedCategory(category, selected) ? 'red' : 'white'
      console.log(selectedCategory(category, selected), color)
      return (
        <Box>
          <Text color={color} block type="secondary">
            {category}
          </Text>
        </Box>
      )
    })}
  </Box>
)
