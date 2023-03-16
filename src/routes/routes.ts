import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/noLazy";
/* import { LazyPages1, LazyPages2, LazyPages3 } from "../01-lazyload/pages"; */
type JSXcomponent = () => JSX.Element

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXcomponent> | JSXcomponent,
    name: string,
}

const lazyLayOut= lazy(() => import(/* webpackChunkName: "LazyLayOut" */'../01-lazyload/layout/lazyLayOut'))

export const routes:Route[] = [
   {
      to:'/lazyload',
      path:'/lazyLoad/*',
      Component: lazyLayOut,
      name:'LazyLayOut- dashboard'
   },
   {
      to:'/no-lazy',
      path:'no-lazy',
      Component: NoLazy,
      name:'no lazy'
   },
   

]
