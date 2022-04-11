interface UseItemProps {
  link: string
  linkText?: string
  title: string
}

export function UseItem({ title, link, linkText }: UseItemProps) {
  return (
    <li>
      <div>
        <h3 className="font-mBold text-lg md:text-xl">{title}:</h3>
        <a
          className="font-mRegular text-base md:text-lg underline"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText ?? link}
        </a>
      </div>
    </li>
  )
}
