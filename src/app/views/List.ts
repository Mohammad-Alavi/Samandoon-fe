import { Pageable } from './Pageable';

export abstract class List<T> implements Pageable, ApiCallGetAll<T> {
  public page = 1;
  public isEnded = false;
  public isLoading = false;

  list: T[] = Array();

  abstract loadMore();

  onApiCallSuccess(objList: T[], currentPage: number, totalPage: number) {
    objList.forEach((obj) => this.list.push(obj));

    this.page++;
    this.isEnded = currentPage >= totalPage;
    this.isLoading = false;
  }

  onApiCallFailure() {
    this.isLoading = false;
  }

}
