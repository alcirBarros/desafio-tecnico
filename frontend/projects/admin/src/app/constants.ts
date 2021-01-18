import { environment } from '../environments/environment';


export class Constants {

    private static V1 = '/v1';
    private static BASE_URL = environment.host + Constants.V1;

    static LOGIN      = Constants.BASE_URL + '/security/signin';

    static LIST       = '/list';
    static FIND_BY_ID = '/show';
    static CREATE     = '/add';
    static UPDATE     = '/update';
    static DELETE     = '/delete';

    static endPoint(modulePath: string, apiPath: string) {
        return Constants.BASE_URL + modulePath + apiPath;
      }
}