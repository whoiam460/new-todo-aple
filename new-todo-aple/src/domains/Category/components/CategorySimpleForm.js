import CategoryWraper from './CategorySimpleForm.style'
import { IconModule, Input, Text } from '../../../components'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { useState } from 'react'
import { useStore } from '../../../context'
import { v4 as uuidv4 } from 'uuid'

const CategorySimpleForm = props => {
  const { setShowComponent } = props
  const [categoryTitle, setCategoryTitle] = useState()
  const { addRecord } = useStore()


  const addCategoryTile = e => {
    if (e.key === 'Enter') {
      addRecord({
        id: uuidv4(),
        name: categoryTitle,
        children: [],
      })
      setShowComponent(false)
    }
  }

  return (
    <CategoryWraper>
      <IconModule icon={<AiOutlineUnorderedList />} />
      <Input
        className="ml-lg"
        onKeyDown={e => addCategoryTile(e)}
        onChange={e => setCategoryTitle(e.target.value)}
        autoFocus
      />
      <Text className="ml-auto">0</Text>
    </CategoryWraper>
  )
}
export default CategorySimpleForm
