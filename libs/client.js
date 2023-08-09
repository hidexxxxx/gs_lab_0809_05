// npm を実行して使用できるようになったmicroCMSの機能
import { createClient } from "microcms-js-sdk";

export const client = createClient({
    // microCMSのドメイン（一人一人違います！）
    serviceDomain: "blog-next-gs-f04-v2",
    // envという仕組みを利用して安全に利用します😊
    // .env.localにAPIキーを設定している。設定していないと動かない
    apiKey: process.env.API_KEY,
});