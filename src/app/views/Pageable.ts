export interface Pageable {
  page: number;
  isEnded: boolean;
  isLoading: boolean;

  loadMore();
}
