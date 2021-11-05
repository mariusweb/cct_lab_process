import { CategoryList, ErrorPage } from '../../../pages/Pages';

const routeListData = [
    { exact: true, path: '/', content: CategoryList, title: 'Categories'},
    { exact: false, path: '', content: ErrorPage, title: 'Error'}
];

export default routeListData;