import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()
export class WidgetService {
    constructor(private _http: Http) {
    }

    baseUrl = environment.baseUrl;

    createWidget(pageId: string, widget: any) {
        return this._http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
            .map((res: Response) => {
                return res.json();
            });
    }

    findWidgetsByPageId(pageId: string) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
            .map((res: Response) => {
                return res.json();
            });
    }

    findWidgetById(widgetId: string) {
        return this._http.get(this.baseUrl + '/api/widget/' + widgetId)
            .map((res: Response) => {
                return res.json();
            });
    }

    updateWidget(widgetId: string, widget: any) {
        return this._http.put(this.baseUrl + '/api/widget/' + widgetId, widget)
            .map((res: Response) => {
                return res.json();
            });
    }

    deleteWidget(widgetId: string) {
        return this._http.delete(this.baseUrl + '/api/widget/' + widgetId)
            .map((res: Response) => {
                return res.json();
            });
    }

    reorderWidgets(startIndex, endIndex, pageId) {

        const url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        console.log(startIndex);
        console.log(endIndex);
        return this._http.put(url, '')
            .map(
                (res: Response) => {
                    const data = res;
                    return data;
                }
            );
    }
}
