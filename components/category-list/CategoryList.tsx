import { TCategory } from '@/types'
import classNames from 'classnames/bind'
import { LinkWrapper } from '..'
import styles from './CategoryList.module.scss'

const cx = classNames.bind(styles)

const CategoryItem: React.FC<{category: TCategory}> = ({ category }) => {
  return (
    <LinkWrapper href="/category/[id]" as={`/category/${category.id}`}>
      <div className={cx('category-item')}>
        {category.category_name}
      </div>
    </LinkWrapper>
  )
}

const CategoryList: React.FC<{ categories : Array<TCategory> }> = ({ categories }) => {
  return (
    <div className={cx('category-list')}>
      {
        categories ? categories.map(category => (
          <CategoryItem category={category} key={category.id}/>
        )) : (
          <>
          </>
        ) 
      }
    </div>
  )
}

export default CategoryList
