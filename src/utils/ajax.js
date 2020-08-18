import { ajax } from "rxjs/ajax";
import { API_TOCKEN } from "../constants/common.constant";
const defaultHeaders = {
  Authorization: `Bearer ${API_TOCKEN}`,
};

const myAjax = (args) => {
  args.headers = args.headers || defaultHeaders;
  return ajax(args);
};

export default myAjax;
