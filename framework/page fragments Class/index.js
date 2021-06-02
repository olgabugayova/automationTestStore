import { CategoryMenuClass } from './categoryMenuFragment'
import { NavBarClass } from './navBarFragment';

const pageFragment = (page) => ({
    CategoryMenu: () => new CategoryMenuClass(page),
    NavBar: () => new NavBarClass(page),

})

export { pageFragment }
