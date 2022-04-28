const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let domainsInfo = {};
  let objKey = '';
  let objValue;
  let arrDomainsList = [];

  function get1TierDNS (dnsStr) {
    let outStr = '';
    let dividerIndx = dnsStr.lastIndexOf('.');
    outStr = dnsStr.slice(dividerIndx + 1);
    return outStr;
  };

  function get2TierDNS (dnsStr) {
    let outStr = '';
    let dividerIndx = dnsStr.lastIndexOf('.');
    outStr = dnsStr.slice(0, dividerIndx);
    if (outStr === '') return outStr;
    dividerIndx = outStr.lastIndexOf('.');
    outStr = outStr.slice(dividerIndx + 1);
    return outStr;
  }

  function get3TierDNS (dnsStr) {
    let outStr = '';
    let dividerIndx = dnsStr.lastIndexOf('.');
    outStr = dnsStr.slice(0, dividerIndx);
    if (outStr === '') return outStr;
    dividerIndx = outStr.lastIndexOf('.');
    if (dividerIndx < 0) return outStr = '';
    outStr = outStr.slice(0, dividerIndx);
    return outStr;
  };

  domains.forEach( element => {
    arrDomainsList.push('.' + get1TierDNS(element));
    if (get2TierDNS(element) !== '') {
      arrDomainsList.push(get2TierDNS(element) + '.' + get1TierDNS(element));
    }
    if (get3TierDNS(element) !== '') {
      arrDomainsList.push(get3TierDNS(element) + '.' + get2TierDNS(element) + '.' + get1TierDNS(element));
    }
  });
  const domainsSet = new Set(arrDomainsList);

  for (const domain of domainsSet) {
    objValue = 0;
    for (let i = 0; i < domains.length; i++) {
      if (domains[i].includes(domain)) objValue++;
    }
    objKey = '.' + get1TierDNS(domain);
    if (get2TierDNS(domain) !== '') objKey += '.' + get2TierDNS(domain);
    if (get3TierDNS(domain) !== '') objKey += '.' + get3TierDNS(domain);
    domainsInfo[objKey] = objValue;
  }

  return domainsInfo;
}

module.exports = {
  getDNSStats
};
