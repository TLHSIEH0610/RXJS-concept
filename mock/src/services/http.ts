import { Observable } from "../shared/observable";

export type HttpResponse =
  | {
      type: "result";
      result: string;
    }
  | {
      type: "error";
      error: Error;
    };

function request(url: string, options: RequestInit) {
  return new Observable<HttpResponse>((next) => {
    return () => {};
  });
}
