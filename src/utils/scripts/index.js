export const filterItFull = (array, value, key) => {
  return array.filter(key
    ? a => a[key].toLowerCase().indexOf(value.toLowerCase()) !== -1
    : a => Object.keys(a).some(k => a[k].toLowerCase().indexOf(value.toLowerCase()) !== -1)
  );
}

export const filterIt = (array, value, key) => {
  return array.filter(key
    ? a => a[key] === value
    : a => Object.keys(a).some(k => a[k] === value)
  );
}

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}


export const objectSort = (property) => {
  let sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
}

export const objectSortBoolean = (property1, property2) => {
  if(!property2) return function (a, b) {
    return (b[property1] === a[property1]) ? 0 : a[property1] ? -1 : 1;
  }
  if(property2) return function (a, b) {
    return (b[property1][property2] === a[property1][property2]) ? 0 : a[property1][property2] ? -1 : 1;
  }
}

export const getRandomColor = () => ('#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6))

export const generateToken = (length) => {
  let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  let b = [];
  for (let i = 0; i < length; i++) {
    let j = (Math.random() * (a.length - 1)).toFixed(0);
    b[i] = a[j];
  }
  return b.join("");
}

export const convertToId = (string) => {
  return string.toLowerCase().replace(" ", "-");
}

export const toDate = (dateStr) => {
  var parts = dateStr.split("/")
  return new Date(parts[2], parts[1] - 1, parts[0])
}

export const buildOptions = (data, key) => {
  return data.map((item)=>(
    {label: capitalize(item[key]), value: item[key]}
  ))
}