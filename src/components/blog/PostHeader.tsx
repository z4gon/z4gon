import styles from '../../../styles/components/blog/PostHeader.module.sass'
import Author from '../../models/Author'
import Avatar from './Avatar'
import CoverImage from './CoverImage'
import DateFormatter from './DateFormatter'
import PostTitle from './PostTitle'

type Props = {
    title: string
    coverImage: string
    date: string
    author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            <div className={styles.authorAndDate}>
                <Avatar name={author.name} pictureUrl={author.pictureUrl} />
                <DateFormatter dateString={date} />
            </div>
            <CoverImage title={title} src={coverImage} />
        </>
    )
}

export default PostHeader
