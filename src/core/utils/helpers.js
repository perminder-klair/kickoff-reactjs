import URI from 'urijs';

/**
 * Find URL from string and return it
 * @param  {[type]} text [description]
 * @return {[type]}      [description]
 */
export function findUrls(text) {
    return URI.withinString(text, url => url);
}
