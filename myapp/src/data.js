export const API_KEY='AIzaSyAGyMl1e1Ik4rP_q7-dgD5go8YwRBeHMhA';


export const MAIN_CATEGORY_API=`https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=in&key=${API_KEY}`
export const SEARCH_API=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=m4&regionCode=in&type=video&maxResults=20&page=3&key=${API_KEY}`
export const CATEGORY_VIDEO_API=`https://www.googleapis.com/youtube/v3/videos?part=snippet`
export const VIDEO_API=`https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${API_KEY}`