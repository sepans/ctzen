import React from 'react'
import { Box } from '@smooth-ui/core-sc'
import { Text, ReverseElementColors } from './Layout'

interface CategoriesProps {
  selected: string
  onSelect?: (string) => void
}

// TODO load from graphql?
const categories = ['Economy', 'Social', 'Foreign']

const selectedCategory = (category: string, selected: string) =>
  category === selected

export const Categories: React.FC<CategoriesProps> = ({
  selected,
  onSelect,
}) => (
  <Box
    display="flex"
    p={2}
    flexDirection="row"
    justifyContent="space-evenly"
    {...ReverseElementColors}
  >
    {categories.map((category, i) => {
      const color = selectedCategory(category, selected) ? 'red' : 'white'
      return (
        <a
          onClick={() => {
            onSelect && onSelect(category)
          }}
        >
          <Box key={i}>
            <Text color={color} block type="secondary">
              {category}
            </Text>
          </Box>
        </a>
      )
    })}
  </Box>
)
