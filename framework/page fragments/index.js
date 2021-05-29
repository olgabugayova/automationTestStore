import { CategoryMenu } from '../page fragments/categoryMenuFragment'
import { NavBar } from '../page fragments/navBarFragment';

const pageFragment = () => ({
    CategoryMenu: () => new CategoryMenu(),
    NavBar: () => new NavBar(),

})

export { pageFragment }
