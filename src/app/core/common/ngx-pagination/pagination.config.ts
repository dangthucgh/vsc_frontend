export class PageConfig {
  //The number of elements in the page
  size: number = 50;
  //The total number of elements
  totalElements: number = 0;
  //The total number of pages
  totalPages: number = 0;
  //The current page number
  pageNumber: number = 1;
}

export function buildSeanetPageConfig(size: number): PageConfig {
  let page = new PageConfig();
  page.size = size;

  return page;
}
