import { TCategory } from '@/types'
import classNames from 'classnames/bind'
import Router from 'next/router'
import { LinkWrapper } from '..'
import styles from './CategoryList.module.scss'

const cx = classNames.bind(styles)

const CategoryItem: React.FC<{category: TCategory, isActive: boolean}> = ({ category, isActive }) => {
  if (category.category_name === 'All Categories') return (
    <LinkWrapper href="/category/all">
      <div className={cx('category-item', isActive ? 'active' : '')}>
        {category.category_name}
      </div>
    </LinkWrapper>
  )

  return (
    <LinkWrapper href="/category/[id]" as={`/category/${category.id}`}>
      <div className={cx('category-item', isActive ? 'active' : '')}>
        {category.category_name}
      </div>
    </LinkWrapper>
  )
}

const CategoryList: React.FC<{ categories : Array<TCategory> }> = ({ categories }) => {
  const currentId: string | string[] = Router.query.id || 'all'
  return (
    <div className={cx('category-list')}>
      <CategoryItem category={{category_name: 'All Categories', id: 0}} isActive={currentId === 'all'}/>
      {
        categories ? categories.map(category => (
          <CategoryItem category={category} key={category.id} isActive={currentId === category.id.toString()}/>
        )) : (
          <>
          </>
        ) 
      }
    </div>
  )
}

export default CategoryList
