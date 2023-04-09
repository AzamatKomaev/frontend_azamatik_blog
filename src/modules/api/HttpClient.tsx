import axios, {AxiosResponse} from "axios";

export class HttpClient {

    public get(url: string, headers: Record<string, string>): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            axios.get(url, { headers })
                .then((response: AxiosResponse) => {
                    resolve(response);
                })
                .catch((error) => {
                    if (error.isAxiosError) {
                        resolve(error.response);
                    }
                    reject(error);
                });
        });
    }

}
