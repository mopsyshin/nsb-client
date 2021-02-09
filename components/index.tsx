import Link, { LinkProps } from 'next/link'

const LinkWrapper: React.FC<LinkProps> = props => (
  <Link {...props}>
    <a>
      {props.children}
    </a>
  </Link>
)

export { LinkWrapper }