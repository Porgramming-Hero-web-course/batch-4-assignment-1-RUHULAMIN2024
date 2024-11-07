function countWordOccurrences(sentence: string, word: string): number {  
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
  
    return lowerCaseSentence.split(lowerCaseWord).length - 1;
  }
    
  