import { NextPageContext } from 'next'
import { AppProps } from 'next/app'

import { ReactElement } from 'react'
import RootLayoutNull from '../../Layout/RootLayoutNull'
import RootLayoutDashboardDriver from '../../Layout/RootLayoutDashboardDriver'
import RootLayoutFinances from '../../Layout/RootLayoutDashboardDriver'
import RootLayoutDashboardMain from '../../Layout/RootLayoutDashboardMain'
import RootLayoutMain from '../../Layout/RootLayoutMain'

export type PageWithNullLayoutType = NextPageContext & {
  layout: typeof RootLayoutNull
}
export type PageWithMainLayoutType = NextPageContext & {
  layout: typeof RootLayoutMain
}
export type PageWithDashboardMainLayoutType = NextPageContext & {
  layout: typeof RootLayoutDashboardMain
}
export type PageWithDashboardDriverLayoutType = NextPageContext & {
  layout: typeof RootLayoutDashboardDriver
}

export type PageWithLayoutType =
  | PageWithNullLayoutType
  | PageWithMainLayoutType
  | PageWithDashboardMainLayoutType
  | PageWithDashboardDriverLayoutType

export type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType
  pageProps: any
}

export type LayoutProps = ({
  children
}: {
  children: ReactElement
}) => ReactElement
