interface ApiCallGet<T> {
  onApiCallSuccess(obj: T);
  onApiCallFailure();
}
