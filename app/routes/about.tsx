import type { MetaFunction } from '@remix-run/node'
import { PageWrapper } from '~/components/PageWrapper'
import { SimpleHeader } from '~/components/SimpleHeader'

export const meta: MetaFunction = () => {
  return {
    title: 'Diurivj | About'
  }
}

export default function About() {
  return (
    <PageWrapper>
      <SimpleHeader title="Diego Vazquez" text="" />

      <p className="mt-4 md:mt-8 text-gray-500 leading-8 font-mRegular sm:text-base md:text-xl">
        Hola, I'm a software engineer based in Mexico City.&nbsp;
        <i className="font-mLight">(Yes, I'm Mexican!)</i>{' '}
        <span role="img" aria-label="Mexico flag">
          🇲🇽
        </span>
      </p>

      <p className="mt-4 md:mt-8 text-gray-500 leading-8 font-mRegular sm:text-base md:text-xl">
        I'm husband and father of two beautiful children{' '}
        <span role="img" aria-label="Family with mother, father, two children">
          👨‍👩‍👧‍👦
        </span>
      </p>

      <p className="mt-4 md:mt-8 text-gray-500 leading-8 font-mRegular sm:text-base md:text-xl">
        Currently working at{' '}
        <a
          className="text-black underline"
          href="https://superrare.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          SuperRare Labs
        </a>{' '}
        <span role="img" aria-label="Gem">
          💎
        </span>
      </p>

      <p className="mt-4 md:mt-8 text-gray-500 leading-8 font-mRegular sm:text-base md:text-xl">
        I rebuilt this website using{' '}
        <a
          className="text-black underline"
          href="https://remix.run"
          target="_blank"
          rel="noopener noreferrer"
        >
          Remix
        </a>
        ; btw I'm the organizer of the official{' '}
        <a
          className="text-black underline"
          href="https://www.meetup.com/remix-mexico"
          target="_blank"
          rel="noopener noreferrer"
        >
          Remix meetup in Mexico City
        </a>{' '}
        <span role="img" aria-label="CD">
          💿
        </span>
      </p>

      <p className="mt-4 md:mt-8 text-gray-500 leading-8 font-mRegular sm:text-base md:text-xl">
        I'm looking for a UX/UI designer to design this website.{' '}
        <a
          className="text-black underline"
          href="mailto:diurivj@gmail.com?subject=UX/UI for diurivj.com"
        >
          If you are interested, hit me up
        </a>{' '}
        <span role="img" aria-label="Mail">
          ✉️
        </span>
      </p>
    </PageWrapper>
  )
}
