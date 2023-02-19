import classNames from 'classnames'
import Link from 'next/link'
import styles from '../../../styles/components/blog/PostPreview.module.sass'
import Author from '../../models/Author'
import Avatar from './Avatar'
import DateFormatter from './DateFormatter'

type Props = {
  isHero?: boolean
  title: string
  coverImageUrl: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  isHero = false,
  title,
  coverImageUrl,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section
      className={classNames(styles.postPreview, {
        [styles.hero]: isHero,
      })}
    >
      <div className={styles.imageWrapper}>
        <Link as={`/blog/${slug}`} href="/blog/[slug]" aria-label={title}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${coverImageUrl})`,
            }}
          />
        </Link>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>
          <Link as={`/blog/${slug}`} href="/blog/[slug]">
            {title}
          </Link>
        </h3>
        <div className={styles.authorAndDate}>
          <Avatar name={author.name} pictureUrl={author.pictureUrl} />
          <DateFormatter dateString={date} />
        </div>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </section>
  )
}

export default PostPreview
