import type { MetaFunction } from '@remix-run/node'
import { PageWrapper } from '~/components/PageWrapper'
import { SimpleHeader } from '~/components/SimpleHeader'
import { UseItem } from '~/components/UseItem'

export const meta: MetaFunction = () => {
  return {
    title: 'Diurivj | Credits'
  }
}

export default function Credits() {
  return (
    <PageWrapper>
      <SimpleHeader title="How I built this website" text="" />
      <ul className="space-y-4">
        <UseItem link="https://remix.run" title="Web Framework" linkText="Remix" />
        <UseItem link="https://fly.io" title="Deployment" linkText="Fly.io" />
        <UseItem link="https://tailwindcss.com" title="Styles" linkText="Tailwind" />
        <UseItem link="https://tailwindui.com" title="UI Framework" linkText="Tailwind UI" />
        <UseItem
          link="https://pangrampangram.com/products/neue-machina"
          title="Font"
          linkText="Neue Machina"
        />
      </ul>
      <p className="font-mRegular text-base md:text-lg mt-4 md:mt-8">
        I'm looking for a UX/UI designer for this website, I already told you?
      </p>
    </PageWrapper>
  )
}
