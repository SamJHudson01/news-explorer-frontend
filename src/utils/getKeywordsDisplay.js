export const getKeywordsDisplay = (keywordsArray) => {
    
    let keywords = "";
    if (keywordsArray.length === 1) {
        keywords += keywordsArray[0];
    } else if (keywordsArray.length === 2) {
        keywords += keywordsArray[0] + " and " + keywordsArray[1];
    } else if (keywordsArray.length > 2) {
        keywords += keywordsArray[0] + ", " + keywordsArray[1] + ", and " + (keywordsArray.length - 2) + " other";
    }
    return keywords;
  }