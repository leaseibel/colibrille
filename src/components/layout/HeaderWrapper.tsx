import { getSettings } from '@/lib/settings'
import Header from './Header'

export default async function HeaderWrapper() {
  const settings = await getSettings()
  return <Header phone={settings.phone} />
}
