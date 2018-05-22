interface ApiCallGetAll<T> {
  onApiCallSuccess(objList: T[], currentPage: number, totalPage: number);
  onApiCallFailure();
}
