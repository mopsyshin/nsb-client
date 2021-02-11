import Link, { LinkProps } from 'next/link'

const LinkWrapper: React.FC<LinkProps> = props => (
  <Link {...props}>
    {props.children}
  </Link>
)

export { LinkWrapper }