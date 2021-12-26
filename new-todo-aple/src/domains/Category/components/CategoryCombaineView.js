import {
  CategoryFormWraper,
  CategoryViewWraper,
} from './CategoryCombaineView.style'
import { IconModule, Text, Button, Input } from '../../../components'
import { AiOutlineUnorderedList, AiOutlineClose } from 'react-icons/ai'
import { useStore } from '../../../context'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CategorySimpleView = props => {
  const { children, itemId } = props
  const { removeRecord, updateRecord } = useStore()
  const [editCategoryMode, setEditCategoryMode] = useState(false)
  const [updateDataValue, setUpdateDataValue] = useState(children)
  const Navigate = useNavigate()

  const updateCategory = e => {
    if (e.key === 'Enter') {
      updateRecord(itemId, updateDataValue)
      setEditCategoryMode(false)
    }
  }

  return (
    <>
      {editCategoryMode ? (
        <CategoryFormWraper>
          <IconModule icon={<AiOutlineUnorderedList />} />
          <Input
            value={updateDataValue}
            className="ml-lg"
            onChange={e => setUpdateDataValue(e.target.value)}
            onKeyDown={e => updateCategory(e)}
            autoFocus
          />
          <Text className="ml-auto">0</Text>
        </CategoryFormWraper>
      ) : (
        <CategoryViewWraper onClick={() => Navigate(itemId)}>
          <IconModule icon={<AiOutlineUnorderedList />} />
          <Text
            onDoubleClick={() => setEditCategoryMode(true)}
            className="ml-md">
            {children}
          </Text>
          <Text className="ml-auto">0</Text>
          <Button
            onClick={() => removeRecord(itemId)}
            className="ml-md"
            icon={<AiOutlineClose />}
          />
        </CategoryViewWraper>
      )}
    </>
  )
}

export default CategorySimpleView
