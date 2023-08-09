
import { getKeywordsDisplay } from './utils/getKeywordsDisplay';

test('Test it can display keywords', () => {
    const keywordsArray = ["test", "test2", "test3"];
    const keywords = getKeywordsDisplay(keywordsArray)
    expect(keywords).toBe("test, test2, and 1 other")    
    } 
);

test('Test it can display keywords - pass in an empty array', () => {
    const keywordsArray = [];
    const keywords = getKeywordsDisplay(keywordsArray)
    expect(keywords).toBe("")    
    }
);


