const PREFIX_LANGUAGE_VALUE = 'text__';
const PREFIX_IMAGE_VALUE = 'image__';

export enum Languages {
  'FRENCH' = 'french',
  'ENGLISH' = 'english',
}

export function loadDataRecursively(
  data: any,
  languageData: any,
  imageData: any
): void {
  if (Array.isArray(data)) {
    data.forEach((item) => {
      loadDataRecursively(item, languageData, imageData);
    });
  } else if (typeof data === 'object') {
    Object.entries(data)?.forEach((entry) => {
      if (typeof entry[1] === 'string') {
        data[entry[0]] = loadStringData(entry[1], languageData, imageData);
      } else if (Array.isArray(entry[1]) || typeof entry[1] === 'object') {
        loadDataRecursively(entry[1], languageData, imageData);
      }
    });
  }
}

function loadStringData(
  data: string,
  languageData: any,
  imageData: any
): string {
  if (data.startsWith(PREFIX_LANGUAGE_VALUE)) {
    return languageData[data.substring(PREFIX_LANGUAGE_VALUE.length)];
  } else if (data.startsWith(PREFIX_IMAGE_VALUE)) {
    return imageData[data.substring(PREFIX_IMAGE_VALUE.length)];
  } else {
    return data;
  }
}
