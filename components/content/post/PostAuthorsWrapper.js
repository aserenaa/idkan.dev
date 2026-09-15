import { Image, Link } from '../../'

export default function PostAuthors ({ authorDetails }) {
  return (
    <dl className='pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700'>
      <dt className='sr-only'>Authors</dt>
      <dd>
        <ul className='flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8'>
          {authorDetails.map((author) => (
            <li className='flex items-center space-x-2' key={author.name}>
              {author.avatar && (
                <Image
                  src={author.avatar}
                  width={38}
                  height={38}
                  alt='avatar'
                  className='h-10 w-10 rounded-full'
                />
              )}
              <dl className='text-sm font-medium leading-5'>
                <dt className='sr-only'>Name</dt>
                <dd className='text-gray-900 dark:text-gray-100'>{author.name}</dd>
                {author.description && (
                  <>
                    <dt className='sr-only'>About</dt>
                    <dd className='mt-1 font-normal text-gray-500 dark:text-gray-400'>
                      {author.description}
                    </dd>
                  </>
                )}
                <dt className='sr-only'>Profile</dt>
                <dd className='mt-1 flex gap-3 whitespace-nowrap'>
                  {author.twitter && (
                    <Link href={author.twitter} className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>
                      {author.twitter.replace('https://twitter.com/', '@')}
                    </Link>
                  )}
                  {author.github && (
                    <Link href={author.github} className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>
                      {author.github.replace('https://github.com/', '@')}
                    </Link>
                  )}
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      </dd>
    </dl>
  )
}
