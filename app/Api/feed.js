'use strict';

const GOOGLE_FEED_API_URI = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=-1&q=";
const HATENA_FEED_URI = "http://b.hatena.ne.jp/search/text?mode=rss&q=";

/* i.e. https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=-1&q=http%3a%2f%2fb%2ehatena%2ene%2ejp%2fsearch%2ftext%3fq%3delixir%26mode%3drss */
export function fetch(keyword) {
  const hatenaURI  =  HATENA_FEED_URI + keyword;
  const url = GOOGLE_FEED_API_URI + encodeURIComponent(hatenaURI);
  return fetch(url).then((res) => res.json());
}

