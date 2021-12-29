import {
  CategoryFormWraper,
  CategoryViewWraper,
} from './CategoryCombaineView.style'
import { IconModule, Text, Button, Input } from '../../../components'
import { AiOutlineUnorderedList, AiOutlineClose } from 'react-icons/ai'
import { useStore } from '../../../context'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CategorySimpleView = props => {
  const { children, categoryId } = props
  const {
    removeRecord,
    updateRecord,
    setSelectedCategory,
    selectedCategory,
    store,
  } = useStore()
  const [editCategoryMode, setEditCategoryMode] = useState(false)
  const [updateDataValue, setUpdateDataValue] = useState(children)
  const Navigate = useNavigate()

  const updateCategory = e => {
    if (e.key === 'Enter') {
      updateRecord(categoryId, updateDataValue)
      setEditCategoryMode(false)
    }
  }

  let taskCounter = 0
  store?.tasks?.map(item =>
    item.parentId === categoryId ? taskCounter++ : null
  )

  const defaultPath = () => {
    if (selectedCategory?.categoryId === categoryId) {
      Navigate('/')
    }
  }

  useEffect(() => {
    Navigate('/')
  }, [])

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
        <CategoryViewWraper>
          <IconModule icon={<AiOutlineUnorderedList />} />
          <Text
            onClick={() => {
              Navigate(categoryId)
              setSelectedCategory({
                categoryId,
                name: children,
              })
            }}
            onDoubleClick={() => setEditCategoryMode(true)}
            className="ml-md">
            {children}
          </Text>
          <Text className="ml-auto">{taskCounter}</Text>
          <Button
            onClick={() => {
              removeRecord({ store, categoryId })
              defaultPath()
            }}
            className="ml-md"
            icon={<AiOutlineClose />}
          />
        </CategoryViewWraper>
      )}
    </>
  )
}

export default CategorySimpleView
