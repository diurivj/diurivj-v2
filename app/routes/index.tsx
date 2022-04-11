import type { MetaFunction } from '@remix-run/node'
import { PageWrapper } from '~/components/PageWrapper'
import { SimpleHeader } from '~/components/SimpleHeader'

export const meta: MetaFunction = () => {
  return {
    title: 'Diurivj | Home'
  }
}

export default function Index() {
  return (
    <PageWrapper>
      <SimpleHeader title="diurivj" text="Software developer." />
    </PageWrapper>
  )
}
